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
    let primaryMessage = new Message('Drew', null, 'Hey Julia!');
    let secondaryMessages = [];
    secondaryMessages.push(new Message('Julia', null, 'How are you?'));
    secondaryMessages.push(new Message('Drew', null, 'Pretty Good.'));
    this.threads = [
      new Thread(primaryMessage, secondaryMessages),
      new Thread(primaryMessage, secondaryMessages)
    ];
  }

  ngOnInit(): void {
  }

  onThreadEmit(thread: Thread): void {
    this.threads.push(thread);
  }

}
