class BOB{
    constructor(x,y){
        var options = {
            'restitution':2,
            'friction':0,
            'density':200,
            
            
        }
        this.body = Bodies.rectangle(x, y, 25,25, options);
        this.width = 70;
        this.height = 70;
        
        
        World.add(world, this.body);
      
      }
      display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.width);
      }
}