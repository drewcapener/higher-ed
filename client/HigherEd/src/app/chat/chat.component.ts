import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/models/thread';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  threads: Thread[];

  constructor() {
    let primaryMessage = new Message('Drew', 134.234567, 'Hey Julia!');
    let secondaryMessages = [];
    secondaryMessages.push(new Message('Julia', 157.234567, 'How are you?'));
    secondaryMessages.push(new Message('Drew', 224.234567, 'Pretty Good.'));
    this.threads = [
      new Thread(primaryMessage, secondaryMessages)
    ];
  }

  ngOnInit(): void {
  }

  onThreadEmit(thread: Thread): void {
    this.threads.push(thread);
  }

}
