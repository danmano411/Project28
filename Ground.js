class Ground{
    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 800, 20, options)
        this.width = 800;
        this.height = 20

        World.add(world, this.body)
    }
    display(){
        rectMode(CENTER)
        var pos = this.body.position
        rect(pos.x, pos.y, this.width, this.height)
    }
}