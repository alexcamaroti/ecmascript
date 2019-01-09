class Negotiation {

    constructor(date, quantity, cost){
        this._date = new Date(date.getTime());
        this._quantity = quantity;
        this._cost = cost;
        Object.freeze(this);
    }

    get date(){
        return new Date(this._date.getTime());
    }

    get quantity(){
        return this._quantity;
    }

    get cost(){
        return this._cost;
    }

    get total(){
        return this._quantity * this._cost;
    }
}