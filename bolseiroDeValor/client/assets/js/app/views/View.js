class View {
    
    constructor(element){
        this._element = element;
    }

    template(model){
        throw new Error("Method template(model) must be implemented to all View.js children.");
    }

    update(model){
        this._element.innerHTML = this.template(model);
    } 
}