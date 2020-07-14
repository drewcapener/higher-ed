import { Message } from './message';

export class Thread {

    primaryMessage: Message;
    secondaryMessages: Message[];

    constructor(primaryMessage: Message,
        secondaryMessages: Message[]) {
        this.primaryMessage = primaryMessage;
        this.secondaryMessages = secondaryMessages;
    }
}