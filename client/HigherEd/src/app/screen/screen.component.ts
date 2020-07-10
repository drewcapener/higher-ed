import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

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

  @HostListener('window:keydown', ['$event'])
    spaceEvent(event: any) {
        this.toggleVideo();
    }

}
