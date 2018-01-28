
// Rect class for the <rect> element
class Rect extends Shape{

    constructor(attributes){
        super('rect',attributes); // create a rect Shape with attrs
        this.x = attributes.x || 0;
        this.y = attributes.y || 0;
        this.width = attributes.width || 0;
        this.height = attributes.height || 0;
    }

    move(x,y){
        this.x = x;
        this.y = y;
        super.move({x:x,y:y});// parent class method
    }

    get dim(){
        return {width : this.width , height : this.height};
    }

    setDim(width,height){
        
        if(!width  || !height){
            console.error('setDim expects an object with width and height ');
            return ;
        }

        this.width =  width;
        this.height = height;
        this.element.setAttributes({width: this.width, height: this.height});
    }

    get pos(){
        return {x:this.x,y:this.y};
    }

}