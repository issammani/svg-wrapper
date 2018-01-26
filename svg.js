class SVG{

    constructor(parentID,width,height){
    
        this.parentID = parentID;
        this.svgNS = "http://www.w3.org/2000/svg";

        this.width = width || 200;
        this.height = height || 200;

        this.elements = ['svg','circle','rect','ellipse','line'];

        this.svg = this.createElement('svg');

        this.parent = document.querySelector(parentID);//could be class or id or tag...

        this.render();         
    }

    render(){
        if(this.parent){
            this.svg.setAttributeNS(null,'width',this.width);
            this.svg.setAttributeNS(null,'height',this.height);
            this.parent.appendChild(this.svg);
        }else
            console.error(`Id ${this.parentID} Not Found !`);
    }

    createElement(name){
        if( this.elements.filter((element) => element === name) )
            return document.createElementNS(this.svgNS, name);
        else
            console.error(`cannot create element ${name}\n`);
    }

    setAttribute(element,key,value){
        element.setAttributeNS(null,key,value);
    }

    appendChild(child){
        if(child && child instanceof Node)
            this.svg.appendChild(child);
        else
            console.log(`Expected a non null child \n Given : ${child}`);

    }

    rect(x,y,width,height,rx,ry){
        const rect = this.createElement('rect');
        rect.setAttributeNS(null, 'x',x || 0);
        rect.setAttributeNS(null, 'y', y || 0);
        rect.setAttributeNS(null, 'width', width || 10);
        rect.setAttributeNS(null, 'height', height || 10);
        rect.setAttributeNS(null, 'rx',rx || 0 );
        rect.setAttributeNS(null, 'ry', ry || 0 );
        this.appendChild(rect);
        return rect;
    }

    circle(cx,cy,r){
        const circle = this.createElement('circle');
        circle.setAttributeNS(null, 'cx',cx );
        circle.setAttributeNS(null, 'cy', cy );
        circle.setAttributeNS(null, 'r', r);
        this.appendChild(circle);
        return circle;
    }

    line(x1,y1,x2,y2){
        const line = this.createElement('line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        this.appendChild(line);
        return line;
    }

    ellipse(cx,cy,rx,ry){
        const ellipse = this.createElement('ellipse');
        ellipse.setAttribute('cx', cx);
        ellipse.setAttribute('cy', cy);
        ellipse.setAttribute('rx', rx);
        ellipse.setAttribute('ry', ry);
        this.appendChild(ellipse);
        return ellipse;
    }
}