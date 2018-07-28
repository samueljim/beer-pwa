// module aliases
var Engine = Matter.Engine;
var Body = Matter.Body;
// Render = Matter.Render,
var World = Matter.World;
var Bodies = Matter.Bodies;

// create an engine
var engine;
var world;
var dropplets = [];
var left_wall,
  right_wall;

// liquid settings
var drop_r = 10;
var foam_width = (width ^ 2 + height ^ 2);
var foam;

// gravity
var gx, gy;

// console.log(ww + ' ' + wh);


function setup() {
  createCanvas(windowWidth, windowHeight);

  // create engine
  engine = Engine.create();

  world = engine.world;

  // run engine
  Engine.run(engine);

  // foam and walls
  left_wall = Bodies.rectangle(-50, height / 2, 100, height, {
    isStatic: true
  });
  right_wall = Bodies.rectangle(width + 50, height / 2, 100, height, {
    isStatic: true
  });
  bottom_wall = Bodies.rectangle(width / 2, height, width, 100, {
    isStatic: true
  });
  foam = Bodies.rectangle(width / 2, height / 2, height * 10, 50, {
    isStatic: true
  });

  // for(var i = 0; i < 200; i++){
  //   dropplets.push(new Dropplet(300, 10, drop_r));
  // }

  World.add(world, [foam, bottom_wall, left_wall, right_wall]);
}


function mouseDragged() {
  dropplets.push(new Dropplet(mouseX, mouseY, drop_r));
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Body.translate(foam, {
      x: 0,
      y: -5
    });
  } else if (keyCode === DOWN_ARROW) {
    Body.translate(foam, {
      x: 0,
      y: 5
    });
  } else if (keyCode === RIGHT_ARROW) {
    Body.rotate(foam, Math.PI / 128);
  } else if (keyCode === LEFT_ARROW) {
    Body.rotate(foam, -Math.PI / 128);
  }

  return false; // prevent default
}

function draw() {
  background(56);
  for (var i = 0; i < dropplets.length; i++) {
    dropplets[i].show();
    dropplets[i].relate_gravity(0, 0);
  }
  console.log(gx);
  console.log(gy);
}

function gyroCallBack(data) {
  gx = data.dm.gx;
  gy = data.dm.gy;
  console.log("gx", gx)
  console.log("gy", gy)
}
