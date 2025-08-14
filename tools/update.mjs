import https from 'https';
import fs from 'fs';

const SRC_TRANSLATION = 'https://raw.githubusercontent.com/Foundryborne/daggerheart/refs/heads/main/lang/en.json';
const DST_PATH = './lang/';

async function get(url) {
    return new Promise((resolve, reject) => {
        https
            .get(url, resp => {
                let data = '';
                resp.on('data', chunk => (data += chunk));
                resp.on('end', () => resolve(data));
            })
            .on('error', err => reject(err));
    });
}

const original = await get(SRC_TRANSLATION);
fs.writeFileSync(`${DST_PATH}en.json`, original);
