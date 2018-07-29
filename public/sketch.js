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
var foam;
var foam_angle;
var directional_gx, directional_gy;

// gravity
var gx = 0,
  gy = 0;
var rot;
var magic_constant = 6.2452399669;
// console.log(ww + ' ' + wh);


function preload() {
  opening = loadSound("./sound/opening.mp3");
  glug = loadSound("./sound/glug.mp3");
  pouring = loadSound("./sound/pouring.mp3");
  // try {
  //   camera = createCapture({
  //     audio: false,
  //     video: {
  //       facingMode: {
  //         exact: "user"
  //       }
  //     }
  //   });
  //   // camera = false;
  // } catch (err) {
  //   camera = false;
  // }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  opening.play();

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
  foam = Bodies.rectangle(width / 2, height / 2, 1500, 50, {
    isStatic: true
  });

  // for(var i = 0; i < 200; i++){
  //   dropplets.push(new Dropplet(300, 10, drop_r));
  // }

  World.add(world, [foam, bottom_wall, left_wall, right_wall]);

  for (var i = 0; i < 30; i++) {
    dropplets.push(new Dropplet(width / 2, 10, drop_r));
  }

}


// function mouseDragged() {
//   dropplets.push(new Dropplet(mouseX, mouseY, drop_r));
// }


function draw() {
  background(56);

  // update foam bubbles
  for (var i = 0; i < dropplets.length; i++) {
    dropplets[i].show();
    if (gx > 1) {
      directional_gx = 0.0001;
    } else if (gx < -1) {
      directional_gx = -0.0001;
    } else {
      directional_gx = 0;
    }
    if (gx > 1) {
      directional_gy = -0.00018;
    } else if (gx < -1) {
      directional_gy = -0.00018;
    } else {
      directional_gy = 0;
    }
    dropplets[i].relate_gravity(directional_gx, directional_gy);
  }
  // update foam angle
  if (gx < -9.8 || gx > 9.8) {
    foam_angle = -(gx / magic_constant);
  } else {
    foam_angle = -1 * ((gx - (0.6 * (gx / 2))) / magic_constant); // don't touch this line, it is actual magic pls just leave it be...
  }
  // Body.setAngle(foam, -foam_angle);

  if (foam.angle < foam_angle) {
    Body.rotate(foam, 0.01);
  } else if (foam.angle > foam_angle) {
    Body.rotate(foam, -0.01);
  }

}


function gyroCallBack(data) {
  // gyroData = data;
  gx = data.dm.gx;
  gy = data.dm.gy;
  // console.log("gx", gx)
  // console.log("gy", gy)
  $('.x').html("gx " + gx);
  $('.y').html("gy " + gy);
}