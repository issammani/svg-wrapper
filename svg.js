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

}