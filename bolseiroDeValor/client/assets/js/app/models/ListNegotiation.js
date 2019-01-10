class ListNegotiation {

    constructor(){
        this._negotiations = []
    }

    addToList(negotiation){
        this._negotiations.push(negotiation);
    }

    get allNegotiations(){
        return [].concat(this._negotiations);
    }
}