export class Message {
    
    sender: string;
    time: number;
    message: string;

    constructor(sender: string,
        time: number, message: string) {
            this.sender = sender;
            this.time = time;
            this.message = message;
    }
}