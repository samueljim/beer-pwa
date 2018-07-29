    var gyro;
    var deg;

    function startGyro() {
        gyro.start(gyroCallBack);
        $('.message').html("");
        gyro.normalizeGravity(true);
    }

    function normalizeGyro() {
        gyro.normalizeGravity(true);
    }

    function setGyroTop() {
        gyro.setHeadDirection();
    }

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