export class Message {
    
    sender: string;
    date: Date;
    message: string;

    constructor(sender: string,
        date: Date, message: string) {
            this.sender = sender;
            this.date = date;
            this.message = message;
    }
}