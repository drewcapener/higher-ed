import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
    this.threads = [];
  }

  ngOnInit(): void {
  }

}
