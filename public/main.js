$(document).ready(function () {
    var ongnReady = function () {
        var gnAvailable = gn.isAvailable();
        console.log(gnAvailable);
        var doAvailable = gn.isAvailable(GyroNorm.DEVICE_ORIENTATION);
        console.log(doAvailable);
    }

    var gn = new GyroNorm();
    gn.init()
        .then(ongnReady)
        .catch(function (e) {
            console.error(e);
        });
})