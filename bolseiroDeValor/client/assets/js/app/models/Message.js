class Message {

    constructor(text = '') {
        this._text = text;
    }

    get message() {
        return this._text;
    }

    set message(text) {
        this._text = text;
    }
}