
class NSElementCreator{
    
    constructor(elementName){
        this.elementName = elementName;
        this.NS = "http://www.w3.org/2000/svg";
        this.NSElements = ['svg','circle','rect','ellipse','line','path','polygon'];
        this.element = this.createElement();
    }

    createElement(){
        if( this.NSElements.filter((element) => element === this.elementName) )
            return document.createElementNS(this.NS, this.elementName);
        else
            console.error(`Cannot create element ${this.elementName}\n`);
    }

    setClass(className){
        this.element.setAttribute('class',className);
    }

    setAttribute(key,value){
        this.element.setAttributeNS(null,key || 0 ,value || 0);
    }

    setAttributes(attrs){
        for(let attr in attrs)
            this.element.setAttribute(attr,attrs[attr] || 0);
    }

    appendChild(childElement){
        if(childElement && childElement instanceof Node)
            this.element.appendChild(childElement);
        else
            console.log(`Expected a non null child \n Given : ${childElement}`);
    }

    get getNode(){
        return this.element;
    }
}

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

    setClass(className){
        this.svg.setClass(className);
    }

    rect(x,y,width,height,rx,ry){
        const rect = new NSElementCreator('rect');
        rect.setAttributes({
            'x' : x,
            'y' : y,
            'width' : width,
            'height' : height,
            'rx' : rx,
            'ry' : ry
        });

        this.svg.appendChild(rect.getNode);
        return rect;
    }

    circle(cx,cy,r){
        const circle = new NSElementCreator('circle');
        circle.setAttributes({
            'cx' : cx,
            'cy' : cy,
            'r' : r
        });

        this.svg.appendChild(circle.getNode);
        return circle;
    }

    line(x1,y1,x2,y2){
        const line = new NSElementCreator('line');
        line.setAttributes({
            'x1': x1,
            'y1': y1,
            'x2': x2,
            'y2': y2
        });
        this.svg.appendChild(line.getNode);
        return line;
    }

    ellipse(cx,cy,rx,ry){
        const ellipse = new NSElementCreator('ellipse');
        ellipse.setAttributes({
            'cx' : cx,
            'cy' : cy,
            'rx' : rx,
            'ry' : ry
        });

        this.svg.appendChild(ellipse.getNode);
        return ellipse;
    }

    path(pathStr){
        const path = new NSElementCreator('path');
        path.setAttribute('d', pathStr);
        this.svg.appendChild(path.getNode);
        return path;
    }
}