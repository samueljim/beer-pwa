$(document).ready(function () {
    var ongnReady = function () {
        var gnAvailable = gn.isAvailable();
        console.log(gnAvailable);
        var doAvailable = gn.isAvailable(GyroNorm.DEVICE_ORIENTATION);
        console.log(doAvailable);
        // gn.init().then(function () {
        //     gn.start(function (data) {
        //         console.log(data);
        //     });
        // }).catch(function (e) {});
    }

    var gn = new GyroNorm();
    gn.init()
        .then(ongnReady)
        .catch(function (e) {
            console.error(e);
        });
})