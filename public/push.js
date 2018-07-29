"use strict";
self.addEventListener('push', event => {
    console.log(event);
    registration.pushManager.getSubscription()
        .then(function (subscription) {
            //If already access granted, enable push button status
            if (subscription) {
                changePushStatus(true);
            } else {
                changePushStatus(false);
            }
        })
        .catch(function (error) {
            console.error('Error occurred while enabling push ', error);
        });
});