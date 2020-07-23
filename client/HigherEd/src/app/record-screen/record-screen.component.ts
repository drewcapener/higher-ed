import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-record-screen',
  templateUrl: './record-screen.component.html',
  styleUrls: ['./record-screen.component.scss']
})
export class RecordScreenComponent implements OnInit {

  @ViewChild('video', { static: true }) video: ElementRef;

  recording: boolean;
  recorder: MediaRecorder;
  chunks: any[];
  vidURL: string;

  constructor() { }

  ngOnInit(): void {
    this.recording = false;
  }

  

  startStream(): void {
    this.recording = true
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(
      (stream) => {
        this.video.nativeElement.srcObject = stream;
        this.recorder = new MediaRecorder(stream);
        this.recorder.start();
        this.recorder.ondataavailable = (ev) => {
          this.chunks.push(ev.data);
        }
        this.recorder.onstop = (ev) => {
          let blob = new Blob(this.chunks, { 'type': 'video/mp4;' });
          this.chunks = [];
          let videoURL = window.URL.createObjectURL(blob);
          this.vidURL = videoURL;
        }
      }
    )
  }

  endStream(): void {
    this.recorder.stop();
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
