class NegotiationController {
    
    constructor(){
                
        let $ = document.querySelector.bind(document);
        this._cDate = $("#cDate");
        this._cQuantity = $("#cQuantity");
        this._cCost = $("#cCost");
        this._listNegotiations = new ListNegotiation();
        this._negotiationView = new NegotiationView($("#negotiationViewTable"));
        this._negotiationView.update(this._listNegotiations);
        
    }

    add(event) {
        event.preventDefault();
        this._listNegotiations.addToList(this._createNegotiation());
        this._negotiationView.update(this._listNegotiations);
        this._cleanFieldsAndFocusForm();
    }
    
    _cleanFieldsAndFocusForm() {
        this._cDate.value = '';
        this._cQuantity.value = 1;
        this._cCost.value = 0.0;
        this._cDate.focus();
    }
    
    _createNegotiation(){
        let cDateReviewed = DateHelper.textToDate(this._cDate.value);
        return new Negotiation(cDateReviewed, this._cQuantity.value, this._cCost.value);
    }
}