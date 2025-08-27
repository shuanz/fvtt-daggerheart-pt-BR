Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        const babele = Babele.get();
        babele.register({
            module: 'daggerheart-pt-BR',
            lang: 'pt-BR',
            dir: 'compendium',
        });
    }
});