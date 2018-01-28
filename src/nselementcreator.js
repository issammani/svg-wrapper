// Generic svg nodes creator
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

    addClass(className){
        if(!this.element.classList.contains(className))
            this.element.classList.add(className);
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

    move(_x,_y){

    }

    get getNode(){
        return this.element;
    }
}