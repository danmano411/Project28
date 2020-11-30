class Rock {
    constructor(x, y, radius){
        
        var options = {
            isStatic: false,
            resitution: 0,
            friction: 1,
            density: 1.2
        }

        this.body = Bodies.circle(x, y, radius - 40, options)
        this.radius = radius;
        this.image = loadImage("Plucking mangoes/stone.png")

        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.radius, this.radius)
    }
}