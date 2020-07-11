import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent implements OnInit {

  primaryMessage: Message;
  secondaryMessages: Message[];
  showSecondary: boolean;

  constructor() {
    this.primaryMessage = new Message('Drew', null, 'Hey Julia!');
    this.secondaryMessages = [];
    this.secondaryMessages.push(new Message('Julia', null, 'How are you?'));
    this.secondaryMessages.push(new Message('Drew', null, 'Pretty Good.'));
    this.showSecondary = false;
  }

  ngOnInit(): void {
  }

}
