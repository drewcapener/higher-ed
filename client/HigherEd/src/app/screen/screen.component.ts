import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @ViewChild('video', {static: true }) video: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {
    this.video.nativeElement.play();
  }

  pauseVideo() {
    this.video.nativeElement.pause();
  }

}
