function Dropplet(x, y) {
    var r = Math.floor((Math.random() * 6) + 6);
    this.body = Bodies.circle(x, y, r);
    this.body.friction = 0.001;
    this.body.mass = 0.28;
    this.r = r;
    World.add(world, this.body);
    
    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        texture(foamimg);
        ellipse(0, 0, this.r*2);
        pop();
    }

    this.relate_gravity = function(r_x, r_y) {
        this.body.force = {x:r_x, y:r_y};
    }
}

