module.exports = {
    staticFileGlobs: [
        'public/style.css',
        'public/main.js',
        'public/404.html',
        'public/pwa.js',
    ],
    importScripts: ['/offline.js'],
    stripPrefix: 'public'
};