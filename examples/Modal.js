
class Modal{

    constructor(idName, isScrollable=false, size=""){
        this._idName = idName 
        this._isScrollable = (isScrollable === true) ? "modal-dialog-scrollable":"" 
        this._size = (size == "") ? "":"modal-" + size 
    }

    getId(){ return "#" + this._idName }
    setId(idName){ this._idName = idName}

    addHeaderClasses(headerClasses=[]){
        this._headerClasses = headerClasses.join(" ")
    }
    
    addBodyClasses(bodyClasses=[]){
        this._bodyClasses = bodyClasses.join(" ")
    }

    addFooterClasses(footerClasses=[]){
        this._footerClasses =  footerClasses.join(" ")
    }



    addToHeader(component){
        this.modalHeader = document.querySelector(this.getId() + ' ' + '.modal-header')
        this.modalHeader.insertAdjacentElement("afterbegin", component)
    }

    addToFooter(component){
        this.modalFooter = document.querySelector(this.getId() + ' ' + '.modal-footer')
        this.modalFooter.appendChild(component)

    }

    addToBody(component){
        this.modalBody = document.querySelector(this.getId() + ' ' + '.modal-body')
        this.modalBody.appendChild(component)

    }




    createModal(){
        return `
        <div id="${this._idName}" class="modal fade">
            <div class="modal-dialog ${this._isScrollable} ${this._size} ">
                <div class="modal-content">

                    <div class="modal-header ${this._headerClasses}">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
        
                    <div class="modal-body ${this._bodyClasses}">
                    </div>

                    <div class="modal-footer ${this._footerClasses}">

                    </div>

                </div>
            </div>
        </div>`

    }
    
}