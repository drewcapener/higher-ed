import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @ViewChild('video', { static: true }) video: ElementRef;
  @ViewChild('progressBar', { static: true }) progressBar: ElementRef;

  constructor() { }  

  ngOnInit(): void {
    this.video.nativeElement.addEventListener('timeupdate', function() {
      var video = document.querySelector('video');
      var progressBar = document.getElementById('pBar');
      var currPos = video.currentTime / video.duration;
      progressBar.style.width = currPos * 100 + '%';
    })
  }

  toggleVideo() {
    if (this.video.nativeElement.paused) {
      this.video.nativeElement.play();
    } else {
      this.video.nativeElement.pause();
    }
  }

  goFullScreen() {
    if (this.video.nativeElement.requestFullscreen) {
      this.video.nativeElement.requestFullscreen();
    }
    if (this.video.nativeElement.webkitRequestFullscreen) {
      this.video.nativeElement.webkitRequestFullscreen();
    }
    if (this.video.nativeElement.mozRequestFullScreen) {
      this.video.nativeElement.mozRequestFullScreen();
    }
    if (this.video.nativeElement.msRequestFullscreen) {
      this.video.nativeElement.msRequestFullscreen();
    }
  }

}
