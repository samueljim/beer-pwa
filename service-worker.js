/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","b1736c1f9fff69d759ef52da43873abd"],["/dixie.js","02e3baf83419fba45f15673dd78266fa"],["/dropplet.js","953c0127b81daba5b9011b5ba2fddd31"],["/gyronorm.complete.min.js","e1cc62c088049c44b1604976ed29a70b"],["/images/beers/beer_texture.jpg","f4e9793d9926dfbadd1efd8112841237"],["/images/beers/foam.jpg","dd802024e97c0b4736b45c571254218c"],["/images/beers/glass.jpg","999959985cdf7a8c07edd44d9fbfd386"],["/images/beers/texture1.jpg","80acea1e1aad1d38099e7d752ab05113"],["/images/beers/texture1.png","ec09181c21c7d3aa322fe67532ac380a"],["/images/beers/texture2.jpg","2d1c5e7e1ff67e88c3586dd53ca3de34"],["/images/beers/texture3.jpg","a0c9f63ec34bc4a4060036b6e32908e3"],["/images/icons/android-icon-144x144.png","6f5468c3b987f4ef7c86128d0efe2394"],["/images/icons/android-icon-192x192.png","155d75f76ebb35c398ad740ec0e5c0c1"],["/images/icons/android-icon-36x36.png","0d727e4dfb706e13076b34612fe91f1a"],["/images/icons/android-icon-48x48.png","6e12303d7191d7d3db400265fded2ac0"],["/images/icons/android-icon-72x72.png","a695dac151198b4bc8f4993ee403ec8d"],["/images/icons/android-icon-96x96.png","248e3e17afac165b9899f5664931710e"],["/images/icons/apple-icon-114x114.png","c09033c92dd2497e8ad27ec64466ccb7"],["/images/icons/apple-icon-120x120.png","d7647df793b45b036d81ad03f4d2ab0e"],["/images/icons/apple-icon-144x144.png","6f5468c3b987f4ef7c86128d0efe2394"],["/images/icons/apple-icon-152x152.png","c03f2bac6d2b68385109da841e40be24"],["/images/icons/apple-icon-180x180.png","2739f75ce4e985974ebe241e4b9e7568"],["/images/icons/apple-icon-57x57.png","23ce67e624774856d91ae4088736163b"],["/images/icons/apple-icon-60x60.png","561fb78c7e5d6f05b71564f2876d1384"],["/images/icons/apple-icon-72x72.png","a695dac151198b4bc8f4993ee403ec8d"],["/images/icons/apple-icon-76x76.png","75e67e5787e225ac63b640bfacd46f4c"],["/images/icons/apple-icon-precomposed.png","9ff62fab7102bc54cb372cb9a36da3bb"],["/images/icons/apple-icon.png","9ff62fab7102bc54cb372cb9a36da3bb"],["/images/icons/favicon-16x16.png","6b7bdfae8aab04c82749c19fdb731226"],["/images/icons/favicon-32x32.png","32acb984e2eda99c0f0abeec6fe85696"],["/images/icons/favicon-96x96.png","248e3e17afac165b9899f5664931710e"],["/images/icons/favicon.ico","d343f3213d7b1223cf2631f99dea1411"],["/images/icons/ms-icon-144x144.png","6f5468c3b987f4ef7c86128d0efe2394"],["/images/icons/ms-icon-150x150.png","7c683ce4cf985d79c67af9dfd5105b60"],["/images/icons/ms-icon-310x310.png","38ebd32e5e23da2aaf7705365e7a6061"],["/images/icons/ms-icon-70x70.png","a105f0fda4013efb01aaf1f11cbe05a7"],["/images/icons/offline.png","670ccad41c828663561255922817df7f"],["/jquery-3.3.1.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["/main.js","a48a0a9a5f1f1cc7f126700be233d248"],["/matter.min.js","278d3b1a33fe233e361a2685900aa785"],["/normalize.css","fda27b856c2e3cada6e0f6bfeccc2067"],["/offline.js","92591d56d31ff0c10a2110f2d80ba8c1"],["/push.js","b29b7e87dce2324fbf367c7a23698fde"],["/pwa.js","160bc1b753dca249c9cf60e8d0421ea7"],["/service-worker.js","bb612dbc366a5ca50aef2ccf17596d37"],["/sketch.js","194c0eba24754cd5c421d02f71a6eabf"],["/sound/glug.mp3","f5f0e6c28b05c6dd67077fde4446da62"],["/sound/opening.mp3","b7b27ddbab5ba78a5e8a310f64fde50c"],["/style.css","807d7ccfc5bd1b45507f398bba0ea736"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("/offline.js","/push.js");

