
// Path class for the <path> element
class Path extends Shape{

    constructor(pathStr){
        super('path',{d:pathStr}); // create a path Shape with pathStr
        this.pathStr =pathStr|| '';
    }

    get d(){
        return this.pathStr;
    }

    set d(_pathStr){
        this.pathStr = _pathStr;
        this.element.setAttribute('d',_pathStr);
    }

}