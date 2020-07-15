import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { VideoTimeService } from '../video-time.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  @ViewChild('video', { static: true }) video: ElementRef;
  @ViewChild('progressBar', { static: true }) progressBar: ElementRef;

  constructor(private videoTimeService: VideoTimeService) { }  

  ngOnInit(): void {
    this.video.nativeElement.addEventListener('timeupdate', this.timeUpdate.bind(this), false);
  }

  timeUpdate(): void {
      this.videoTimeService.setTime(this.video.nativeElement.currentTime);
      var currPos = this.video.nativeElement.currentTime / this.video.nativeElement.duration;
      this.progressBar.nativeElement.style.width = currPos * 100 + '%';
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

  onVolumeChange(value: number): void {
    this.video.nativeElement.volume = value;
  }

}
