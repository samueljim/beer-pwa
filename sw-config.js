module.exports = {
    staticFileGlobs: [
        'public/css/**.css',
        'public/**.css',
        'public/js/**.js',
        'public/**.js',
        'public/images/icons/**.png',
        'public/images/icons/**.jpg',
        'public/images/beers/**.png',
        'public/404.html'
    ],
    importScripts: ['/offline.js'],
    stripPrefix: 'public'
};