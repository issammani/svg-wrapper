
// Line class for the <line> element
class Line extends Shape{

    constructor(attributes){
        super('line',attributes); // create a line Shape with attrs
        this.x1 = attributes.x1 ;
        this.y1 = attributes.y1 ;
        this.x2 = attributes.x2;
        this.y2 = attributes.y2;

    }

    move(x1,y1,x2,y2){
        this.x1 = x1 ;
        this.y1 = y1 ;
        this.x2 = x2;
        this.y2 = y2;
        super.move({x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2});// parent class method
    }

    get pos(){
        return {x1:this.x1,y1:this.y1,x2:this.x2,y2:this.y2};
    }

}