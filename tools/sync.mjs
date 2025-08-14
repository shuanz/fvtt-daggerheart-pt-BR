import fs from 'fs';

const SRC = './lang/en.json';
const DST = './lang/es.json';

const original = JSON.parse(fs.readFileSync(SRC, {encoding: 'utf8', flag: 'r'}));
const translation = JSON.parse(fs.readFileSync(DST, {encoding: 'utf8', flag: 'r'}));

function deepMerge(dst, src) {
	if (Array.isArray(dst) || Array.isArray(src)) {
		throw new Error('arrays are not supported in deepMerge');
	}

	for (const key of Object.keys(src)) {
		if (typeof src[key] === 'object') {
			if (!Object.hasOwn(dst, key)) {
				dst[key] = {};
			}
			deepMerge(dst[key], src[key]);
		} else if (!Object.hasOwn(dst, key)) {
			dst[`_${key}`] = src[key];
		}
	}
}

deepMerge(translation, original);
fs.writeFileSync(DST, JSON.stringify(translation, null, 4));