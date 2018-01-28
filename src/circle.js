
// Circle class for the <circle> element
class Circle extends Shape{

    constructor(attributes){
        super('circle',attributes); // create a circle Shape with attrs
        this.r = attributes.r || 10;
        this.cx = attributes.x || this.r;
        this.cy = attributes.y || this.r;

    }

    move(cx,cy){
        this.cx = cx;
        this.cy = cy;
        super.move({cx:cx,cy:cy});// parent class method
    }

    get radius(){
        return this.r;
    }

    setRadius(r){
        this.r =  r;
        this.element.setAttribute('r',r);
    }

    get pos(){
        return {cx:this.cx,cy:this.cy};
    }

}