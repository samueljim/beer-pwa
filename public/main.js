$(document).ready(function () {
    var gyro;

    function startGyro() {
        gyro.start(gyroCallBack);
        gyro.normalizeGravity(true);
    }

    function gyroCallBack(data) {
        $('.message').html(data.do.alpha)
        $('.beta').html(data.do.beta)
        $('.gamma').html(data.do.gamma)

        // $('#do_alpha').val(data.do.alpha);
        // $('#do_beta').val(data.do.beta);
        // $('#do_gamma').val(data.do.gamma);
        // $('#dm_x').val(data.dm.x);
        // $('#dm_y').val(data.dm.y);
        // $('#dm_z').val(data.dm.z);
        // $('#dm_gx').val(data.dm.gx);
        // $('#dm_gy').val(data.dm.gy);
        // $('#dm_gz').val(data.dm.gz);
        // $('#dm_alpha').val(data.dm.alpha);
        // $('#dm_beta').val(data.dm.beta);
        // $('#dm_gamma').val(data.dm.gamma);
    }

    function normalizeGyro() {
        gyro.normalizeGravity(true);
    }

    function setGyroTop() {
        gyro.setHeadDirection();
    }

    // $('body').click(function () {
    //     setGyroTop();
    // });
    var gyroReady = function () {
        var isAvailable = gyro.isAvailable();
        if (!isAvailable.deviceOrientationAvailable) {
            console.error({
                message: 'Device orientation is not available.'
            });
        }
        if (!isAvailable.accelerationAvailable) {
            console.error({
                message: 'Device acceleration is not available.'
            });
        }
        if (!isAvailable.accelerationIncludingGravityAvailable) {
            console.error({
                message: 'Device acceleration incl. gravity is not available.'
            });
        }
        if (!isAvailable.rotationRateAvailable) {
            console.error({
                message: 'Device rotation rate is not available.'
            });
        }
        startGyro();
    }
    var gyroInit = function () {
        gyro = new GyroNorm();
        gyro.init()
            .then(gyroReady)
            .catch(function (e) {
                console.error(e);
            });
    }
    gyroInit();
})