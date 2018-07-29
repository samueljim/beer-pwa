glug = loadSound("sound/glug.mp3");
opening = loadSound("sound/opening.mp3");
pouring = loadSound("sound/pouring.mp3");
camera = createCapture({
  audio: false,
  video: {
    facingMode: {
      exact: "environment"
    }
  }
});
createCanvas(windowWidth, windowHeight);
opening.play();
