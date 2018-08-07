module.exports = {
    staticFileGlobs: [
        'public/css/**.css',
        'public/**.css',
        'public/js/**.js',
        'public/404.html',
        'public/**.js',
        'public/sound/**.mp3',
        'public/images/icons/**.png',
        'public/images/icons/**.jpg',
        'public/images/icons/**.ico',
        'public/images/beers/**.png',
        'public/images/beers/**.jpg',
        'https://unpkg.com/dexie@latest/dist/dexie.js',
        'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.sound.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js'
    ],
    importScripts: ['/offline.js', '/push.js'],
    stripPrefix: 'public'
};