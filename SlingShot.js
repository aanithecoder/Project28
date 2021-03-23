class SlingShot{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        this.bodyA = body
        this.pointB = anchor
        this.SlingShot = Constraint.create(options);
        World.add(world, this.SlingShot);
    }

    fly(){
        this.SlingShot.bodyA = null;
    }

    attach(body){
        this.SlingShot.bodyA = body
    }

    display(){
        if (this.SlingShot.bodyA) {
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
    }
}