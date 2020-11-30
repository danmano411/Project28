class Tree {
    constructor(x, y){

        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 0, 0, options)
        this.width = 300;
        this.height = 500;
        this.image = loadImage("Plucking mangoes/tree.png")

        World.add(world, this.body)
    }

    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
    }
}