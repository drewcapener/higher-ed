import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { Thread } from 'src/models/thread';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent implements OnInit {

  thread: Thread;
  showSecondary: boolean;

  constructor() {
    let primaryMessage = new Message('Drew', null, 'Hey Julia!');
    let secondaryMessages = [];
    secondaryMessages.push(new Message('Julia', null, 'How are you?'));
    secondaryMessages.push(new Message('Drew', null, 'Pretty Good.'));
    this.thread = new Thread(primaryMessage, secondaryMessages);
    this.showSecondary = false;
  }

  ngOnInit(): void {
  }

}
