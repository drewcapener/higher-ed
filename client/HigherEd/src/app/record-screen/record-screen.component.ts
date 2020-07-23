import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-record-screen',
  templateUrl: './record-screen.component.html',
  styleUrls: ['./record-screen.component.scss']
})
export class RecordScreenComponent implements OnInit {

  @ViewChild('video', { static: true }) video: ElementRef;

  recording: boolean;

  constructor() { }

  ngOnInit(): void {
    this.recording = false;
  }

  startStream(): void {
    this.recording = true
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(
      (stream) => {
        this.video.nativeElement.srcObject = stream;
      }
    )
  }

  endStream(): void {
    this.recording = false;
    let stream = this.video.nativeElement.srcObject;
    let tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }

    this.video.nativeElement.srcObject = null;
  }

}
