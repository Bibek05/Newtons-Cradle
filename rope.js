class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 250
        }
        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
        
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            push();


            strokeWeight(4);
            stroke(48, 22, 8);

            line(pointA.x, pointA.y, pointB.x, pointB.y);

            pop();



        }
    }
    
}