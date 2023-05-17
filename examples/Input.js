

class Input extends Component{
    constructor(idname, type,  value=null, classes=[], datasets={}){
        super('input', idname, '', classes, datasets)
        this._component.type = type
        this._component.value = value
        this._component.required = true
        
    }
}