import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { Thread } from 'src/models/thread';

@Component({
  selector: 'app-thread-card',
  templateUrl: './thread-card.component.html',
  styleUrls: ['./thread-card.component.scss']
})
export class ThreadCardComponent implements OnInit {

  @Input() thread: Thread;
  showSecondary: boolean;

  constructor() {
    this.showSecondary = false;
  }

  ngOnInit(): void {
  }

}
