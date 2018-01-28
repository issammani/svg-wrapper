
// Ellipse class for the <ellipse> element
class Ellipse extends Shape{

    constructor(attributes){
        super('ellipse',attributes); // create a ellipse Shape with attrs
        this.rx = attributes.rx || 10; // x radius
        this.ry = attributes.ry || 20; // y radius
        this.cx = attributes.cx || this.rx;
        this.cy = attributes.cy || this.ry;

    }

    move(cx,cy){
        this.cx = cx;
        this.cy = cy;
        super.move({cx:cx,cy:cy});// parent class method
    }

    get radius(){
        return {rx : this.rx, ry : this.ry};
    }

    setRadius(rx,ry){
        this.rx = rx;
        this.ry = ry;
        this.element.setAttribute({rx:this.rx,ry:this.ry});
    }

    get pos(){
        return {cx:this.cx,cy:this.cy};
    }

}