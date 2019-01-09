class NegotiationController {
    
    constructor(){        
        let $ = document.querySelector.bind(document);
        this.cDate = $("#cDate");
        this.cQuantity = $("#cQuantity");
        this.cCost = $("#cCost");
        
    }

    add(event) {
        event.preventDefault;
        let cDateReviewed = new Date(...this.cDate.value.split("-").map((item, index) => item - index % 2))
        let negotiation = new Negotiation(cDateReviewed, this.cQuantity.value, this.cCost.value);
        console.log(negotiation);


    }
}