// SVG wrapper
class SVG{

    constructor(parentID,width,height){
    
        this.parentID = parentID;

        this.width = width || 200;
        this.height = height || 200;


        this.svg = new NSElementCreator('svg');

        this.parent = document.querySelector(parentID);//could be class or id or tag...

        this.render();         
    }

    render(){
        if(this.parent){
            this.svg.setAttributes( {'width':this.width,'height':this.height});
            this.parent.appendChild(this.svg.getNode);
        }else
            console.error(`Id ${this.parentID} Not Found !`);
    }

    addClass(className){
        this.svg.addClass(className);
    }

    rect(attrs){
        const rect = new Rect(attrs);
        this.svg.appendChild(rect.getNode);
        return rect;
    }

    circle(attrs){
        const circle = new Circle(attrs);
        this.svg.appendChild(circle.getNode);
        return circle;
    }

    line(attrs){
        const line = new Line(attrs);
        this.svg.appendChild(line.getNode);
        return line;
    }

    ellipse(attrs){
        const ellipse = new Ellipse(attrs);
        this.svg.appendChild(ellipse.getNode);
        return ellipse;
    }

    path(pathStr){
        const path = new Path(pathStr);
        this.svg.appendChild(path.getNode);
        return path;
    }
}