
class Component{
    constructor(component, idname, title, classes=[], datasets={}){
        this._component = document.createElement(component)
        this._idname = idname
        this._title = title
        this._classes = classes
        this._datasets = datasets

    }



    // Gestion composant
    createComponent(){
        this._component.id = this._idname
        this._component.name = this._idname
        this._component.innerHTML = this._title

        this.addClasses(this.getClasses())
        this.addDatasets(this.getDatasets())

        return this.getComponent()
    }

    removeComponent(){
        this.getComponent().parentNode.removeChild(this.getComponent())
    }

    getComponent(){
        return this._component
    }

    // Gestion identifiant et nom
    getIdName(){
        return this._idname
    }

    setIdName(idname){
        this._idname = idname
    }


    // Gestion classes
    addClasses(classes=[]){
        classes.forEach(cls => {
            this._classes.push(cls)
            this._component.classList.add(cls)
        })
        
    }

    delClasses(classes=[]){
        classes.forEach(cls => {
            this._classes.pop(cls)
            this._component.classList.remove(cls)
        })
    }

    setClasses(classes=[]) {
        this.delClasses(this.getClasses())
        this.addClasses(classes)
        this._classes = classes

    }

    getClasses(){
        return this._classes
    }

    // Gestion datasets

    addDatasets(datasets={}){
        for(var data in datasets){
            this._datasets[data] = datasets[data]
            this._component.setAttribute(data, datasets[data])
        }
    }

    delDatasets(datasets={}){
        for(var data in datasets){
            delete this._datasets[data]
            this._component.removeAttribute(data)
        }
    }

    getDatasets(){
        return this._datasets
    }







}