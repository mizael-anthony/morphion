class Form{

    constructor(action, method, id, title="", formclass=[]){
        this.action = action
        this.method = method
        this.id = id
        this.title = title
        this.formclass = formclass

        this.elements = []
    }

    addClassList(obj, class_list=[]){
        for(var i  = 0; i < class_list.length; i++){
            obj.classList.add(class_list[i])
        }
    }

    inputRange(label, name, divclass=[], inputclass=[], value=null, required=true){
        let div_input_range = document.createElement("div")

        let label_range = document.createElement("label")
        label_range.innerHTML = label

        let input_range = document.createElement("input")
        input_range.setAttribute("type", "range")
        input_range.setAttribute("name", name)
        input_range.setAttribute("id", name)

        if(value)input_range.setAttribute("value", value)

        if(required)input_range.required = required

        div_input_range.appendChild(label_range)
        div_input_range.appendChild(input_range)

        this.addClassList(div_input_range, divclass)
        this.addClassList(input_range, inputclass)

        this.elements.push(div_input_range)



    }


    inputColor(label, name, divclass=[], inputclass=[], value=null, required=true){
        let div_input_color = document.createElement("div")

        let label_color = document.createElement("label")
        label_color.innerHTML = label

        let input_color = document.createElement("input")
        input_color.setAttribute("type", "color")
        input_color.setAttribute("name", name)
        input_color.setAttribute("id", name)


        if(value)input_color.setAttribute("value", value)

        if(required) input_color.required = required

        div_input_color.appendChild(label_color)
        div_input_color.appendChild(input_color)

        this.addClassList(div_input_color, divclass)
        this.addClassList(input_color, inputclass)

        this.elements.push(div_input_color)


    }

    inputNumber(label, name, divclass=[], inputclass=[], value=null, required=true){

        let div_input_number = document.createElement("div")
        
        let label_number = document.createElement("label")
        label_number.innerHTML = label

        let input_number = document.createElement("input")
        input_number.setAttribute("type", "number") 
        input_number.setAttribute("name", name)
        input_number.setAttribute("id", name)

        if(value)input_number.setAttribute("value", value)
                        
        if(required)input_number.required = required
            

        div_input_number.appendChild(label_number)
        div_input_number.appendChild(input_number)

        this.addClassList(div_input_number, divclass)
        this.addClassList(input_number, inputclass)

        this.elements.push(div_input_number)

    }

    inputText(label, name, divclass=[], inputclass=[], placeholder=null, value=null, required=true){

        let div_input_text = document.createElement("div")
        
        let label_text = document.createElement("label")
        label_text.innerHTML = label

        let input_text = document.createElement("input")
        input_text.setAttribute("type", "text") 
        input_text.setAttribute("name", name)
        input_text.setAttribute("id", name)

        if(value)input_text.setAttribute("value", value)
            
        if(placeholder)input_text.setAttribute("placeholder", placeholder)
            
        if(required)input_text.required = required
            

        div_input_text.appendChild(label_text)
        div_input_text.appendChild(input_text)

        this.addClassList(div_input_text, divclass)
        this.addClassList(input_text, inputclass)

        this.elements.push(div_input_text)

    }

    inputEmail(label, name, divclass=[], inputclass=[], placeholder=null, value=null, required=true){
        let div_input_email = document.createElement("div")

        

        let label_email = document.createElement("label")
        label_email.innerHTML = label



        let input_email = document.createElement("input")
        input_email.setAttribute("type", "email") 
        input_email.setAttribute("name", name)
        input_email.setAttribute("id", name)



        if(value)input_email.setAttribute("value", value)

        if(placeholder)input_email.setAttribute("placeholder", placeholder)

        if(required)input_email.required = required
            
        div_input_email.appendChild(label_email)
        div_input_email.appendChild(input_email)

        this.addClassList(div_input_email, divclass)
        this.addClassList(input_email, inputclass)

        this.elements.push(div_input_email)

    }

    inputPassword(label, name, divclass=[], inputclass=[], placeholder=null, value=null, required=true){
        let div_input_password = document.createElement("div")

        

        let label_password = document.createElement("label")
        label_password.innerHTML = label



        let input_password = document.createElement("input")
        input_password.setAttribute("type", "password") 
        input_password.setAttribute("name", name)
        input_password.setAttribute("id", name)



        if(value)input_password.setAttribute("value", value)

        if(placeholder)input_password.setAttribute("placeholder", placeholder)

        if(required)input_password.required = required
            
        div_input_password.appendChild(label_password)
        div_input_password.appendChild(input_password)

        this.addClassList(div_input_password, divclass)
        this.addClassList(input_password, inputclass)

        this.elements.push(div_input_password)

    }

    inputFile(label, name, divclass=[], labelclass=[], inputclass=[], accept=null, value=null, required=true){
        
        let div_input_file = document.createElement("div")

        

        let label_file = document.createElement("label")
        label_file.innerHTML = label



        let input_file = document.createElement("input")
        input_file.setAttribute("type", "file") 
        input_file.setAttribute("name", name)
        input_file.setAttribute("id", name)



        if(value)input_file.setAttribute("value", value)

        if(accept)input_file.setAttribute("accept", accept)

        if(required)input_file.required = required
            
        div_input_file.appendChild(input_file)
        div_input_file.appendChild(label_file)

        this.addClassList(div_input_file, divclass)
        this.addClassList(label_file, labelclass)
        this.addClassList(input_file, inputclass)

        this.elements.push(div_input_file)
    }

    inputTextarea(label, name, divclass=[], inputclass=[], cols, rows, placeholder=null, value=null, required=true){
        let div_input_textarea = document.createElement("div")

        

        let label_textarea = document.createElement("label")
        label_textarea.innerHTML = label



        let input_textarea = document.createElement("textarea")
        input_textarea.name = name
        input_textarea.id = name
        input_textarea.cols = cols
        input_textarea.rows = rows


        if(value)input_textarea.value =  value

        if(placeholder)input_textarea.placeholder = placeholder

        if(required)input_textarea.required = required
            
        div_input_textarea.appendChild(label_textarea)
        div_input_textarea.appendChild(input_textarea)

        this.addClassList(div_input_textarea, divclass)
        this.addClassList(input_textarea, inputclass)

        this.elements.push(div_input_textarea) 
    }


    inputButton(label, name, inputclass=[], value=null){
        let input_button = document.createElement("button");
         
        input_button.type = "submit"
        input_button.name = name
        input_button.id = name
        input_button.innerHTML = label

        if(value){
            input_button.value = value
        }

        this.addClassList(input_button, inputclass)


        this.elements.push(input_button)

    }

    inputSelect(label, name, inputclass=[], values=[], required=true){
        
        let input_select = document.createElement("select")

        input_select.name = name

        let first_option = document.createElement("option")
        first_option.label = label

        input_select.appendChild(first_option)

        for(let i = 0; i < values.length; i++){

            let option = document.createElement("option")
            option.value = values[i]
            option.label = values[i].toUpperCase()
            input_select.appendChild(option)

        }

        this.addClassList(input_select, inputclass)

        if(required) input_select.required = required

        this.elements.push(input_select)


    }

    createForm(){

        let form = document.createElement("form")
        form.action = this.action
        form.method = this.method
        form.id = this.id
        form.name = this.id
        if(form.method === 'post')
            form.enctype = "multipart/form-data"


        if(this.title != ""){
            let fieldset = document.createElement("fieldset")
            fieldset.classList.add("border", "p-2")
            let legend = document.createElement("legend")
            legend.classList.add("w-auto")
            legend.innerHTML = this.title

            fieldset.appendChild(legend)
            this.elements.forEach(element => {
                fieldset.appendChild(element)
            })
            form.appendChild(fieldset)
        }

        else{
            this.elements.forEach(element => {
                form.appendChild(element)
            })
        }

        










        this.addClassList(form, this.formclass)
        return form
    }


}