import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Thread } from 'src/models/thread';
import { Message } from 'src/models/message';

@Component({
  selector: 'app-new-thread',
  templateUrl: './new-thread.component.html',
  styleUrls: ['./new-thread.component.scss']
})
export class NewThreadComponent implements OnInit {

  newMessage: string;
  @Input() threads: Thread[]

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.threads.push(new Thread(new Message('Drew', null, this.newMessage), null))
    this.newMessage = '';
  }

}
