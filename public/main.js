$(document).ready(function () {
    var gyro;
    var deg;

    function startGyro() {
        gyro.start(gyroCallBack);
        // gyro.normalizeGravity(true);
    }

    // function gyroCallBack(data) {
    //     $('.message').html("alpha" + Math.floor(data.do.alpha));
    //     $('.x').html("x " + Math.floor(data.dm.gx));
    //     $('.y').html("y " + Math.floor(data.dm.gy));
    //     $('.z').html("z " + Math.floor(data.dm.gz));
    //     var particles = $('#particles-js');

    //     deg = Math.floor(data.dm.y);

    //     // $('.deg').html(Math.floor(deg));

    //     particles.css({
    //         WebkitTransform: 'rotate(' + deg + 'deg)'
    //     });
    //     particles.css({
    //         '-moz-transform': 'rotate(' + deg + 'deg)'
    //     });


    //     // $('#dm_x').val(data.dm.x);
    //     // $('#dm_y').val(data.dm.y);
    //     // $('#dm_z').val(data.dm.z);
    //     // $('#do_alpha').val(data.do.alpha);
    //     // $('#do_beta').val(data.do.beta);
    //     // $('#do_gamma').val(data.do.gamma);
    //     // $('#dm_x').val(data.dm.x);
    //     // $('#dm_y').val(data.dm.y);
    //     // $('#dm_z').val(data.dm.z);
    //     // $('#dm_gx').val(data.dm.gx);
    //     // $('#dm_gy').val(data.dm.gy);
    //     // $('#dm_gz').val(data.dm.gz);
    //     // $('#dm_alpha').val(data.dm.alpha);
    //     // $('#dm_beta').val(data.dm.beta);
    //     // $('#dm_gamma').val(data.dm.gamma);
    // }

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