class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            lenght: 10,
            stiffness: 0.009
        }

        this.pointB = pointB;
        this.chain = Constraint.create(options)

        World.add(world, this.chain)
    }

    fly(){
        this.chain.bodyA = null;
    }

    attach(lrock){
        this.chain.bodyA = lrock;
    }

    display(){
        if (this.chain.bodyA){
            var posA = this.chain.bodyA.position
            var posB = this.pointB
            line(posA.x, posA.y, posB.x, posB.y)
        }
    }
}