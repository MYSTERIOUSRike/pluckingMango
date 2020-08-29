class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.4,
            length: 10
        }
              
        this.pointB = pointB
        this.chain = constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(body1){
        this.chain.bodyA = body1
    }

    display(){
        
            if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            
           }
        }
    }
    
