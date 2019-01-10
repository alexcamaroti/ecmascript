class DateHelper {

    static textToDate(text) {
        console.log(text);
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
            throw new Error("Date must be in the format: yyyy-MM-dd");
        }
        return new Date(...text.split("-").map((item, index) => item - index % 2))
    }
    
    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}