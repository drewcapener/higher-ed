import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models/message';
import { Thread } from 'src/models/thread';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent implements OnInit {

  input: ElementRef;

  @ViewChild('input') set content(content: ElementRef) {
    if (content) {
      this.input = content;
    }
  }

  @Input() thread: Thread;
  showSecondary: boolean;
  hasSecondary: boolean;

  constructor() {
    this.showSecondary = false;
  }

  ngOnInit(): void {
    if (this.thread.secondaryMessages) {
      this.hasSecondary = true;
    }
  }

  onSubmit(newMessage: string): void {
    this.thread.secondaryMessages.push(new Message('Drew', null, newMessage));
    this.input.nativeElement.innerText = '';
  }

}
