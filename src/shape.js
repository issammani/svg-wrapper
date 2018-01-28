
// Abstract Shape class ie : Rect, circle...
class Shape {
    
    constructor(shapeName,attributes){
        this.element = new NSElementCreator(shapeName);
        this.element.setAttributes(attributes);
    }

    addClass(className){
        this.element.addClass(className);
    }

    move(newCoords){
        this.element.setAttributes(newCoords);
    }

    get getNode(){
        return this.element.getNode;
    }

    get pos(){

    }

    set pos(coords){
        
    }

}