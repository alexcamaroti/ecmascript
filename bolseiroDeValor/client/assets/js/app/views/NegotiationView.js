class NegotiationView {

    constructor(element) {
        this._element = element;
    }

    _template(model){
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATE</th>
                <th>QUANTITY</th>
                <th>COST</th>
                <th>TOTAL</th>
            </tr>
        </thead>
        
        <tbody>
        ${model.allNegotiations.map(item =>
            `<tr>
                <td>${DateHelper.dateToText(item.date)}</td>
                <td>${item.quantity}</td>
                <td>${item.cost}</td>
                <td>${item.total}</td>
            </tr>`
            ).join("")}
        </tbody>
        <tfoot>
        
        <td colspan="3"></td>
        <td>${model.allNegotiations.reduce((total, item) => total + item.total, 0.0)}</td>
        </tfoot>
    </table>`
    }

   update(model){
       this._element.innerHTML = this._template(model);
   } 
}