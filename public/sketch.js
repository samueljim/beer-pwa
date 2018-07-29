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
var foam;
var foam_angle;
var directional_gx, directional_gy;
var pour_limit;

// gravity
var gx = 0,
  gy = 0;
var rot;
var magic_constant = 6.2452399669;
// console.log(ww + ' ' + wh);
var beer, glug, opening, foamimg;

function calculate_pour_limit(fy) {
  var opposite = (height / 2 + fy - 25);
  var adjacent = (width / 2);

  pour_limit = Math.asin(opposite / adjacent);
}

// preload sound and camera
function preload() {
  beer = loadImage("./images/beers/texture3.jpg");
  foamimg = loadImage("./images/beers/foam.jpg");
  opening = loadSound("./sound/opening.mp3");
  glug = loadSound("./sound/glug.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  opening.play();

  // create engine
  engine = Engine.create();

  world = engine.world;

  // run engine
  Engine.run(engine);


  // foam and walls
  left_wall = Bodies.rectangle(-width / 2 - 50, 0, 100, height, {
    isStatic: true
  });
  right_wall = Bodies.rectangle(width / 2 + 50, 0, 100, height, {
    isStatic: true
  });
  bottom_wall = Bodies.rectangle(0, height / 2, width, 100, {
    isStatic: true
  });
  foam = Bodies.rectangle(0, 0, 1500, 50, {
    isStatic: true
  });

  // for(var i = 0; i < 200; i++){
  //   dropplets.push(new Dropplet(300, 10, drop_r));
  // }

  World.add(world, [foam, bottom_wall, left_wall, right_wall]);

  for (var i = 0; i < 60; i++) {
    dropplets.push(new Dropplet(0, -height / 2 + 10));
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
    dropplets[i].relate_gravity(directional_gx, directional_gy); // make dropplet gravity relative to angle of liquid
  }
  // update foam angle
  if (gx < -9.8 || gx > 9.8) {
    foam_angle = -(gx / magic_constant);
  } else {
    foam_angle = -1 * ((gx - (0.6 * (gx / 2))) / magic_constant); // don't touch this line, it is actual magic pls just leave it be...
  }
  // Body.setAngle(foam, -foam_angle);
  calculate_pour_limit(foam.position.y);
  if (foam_angle < -pour_limit || foam_angle > pour_limit) {
    Body.translate(foam, {
      x: 0,
      y: 10
    });
  }

  if (foam.angle < foam_angle) {
    Body.rotate(foam, 0.01);

    push();
    translate(foam.position.x, foam.position.y);
    rotate(foam.angle);
    rectMode(CENTER);
    texture(beer);

    rect(foam.position.x, (foam.position.y + 475), 1000, 1000);
    pop();
  } else if (foam.angle > foam_angle) {
    Body.rotate(foam, -0.01);

    push();
    translate(foam.position.x, foam.position.y);
    rotate(foam.angle);
    rectMode(CENTER);
    texture(beer);
    rect(foam.position.x, (foam.position.y + 475), 1500, 1000);
    pop();
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