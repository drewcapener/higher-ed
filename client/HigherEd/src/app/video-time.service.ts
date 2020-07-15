import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoTimeService {

  currentTime: number = 100.235678

  setTime(time: number): void {
    this.currentTime = time;
  }

  getTime(): number {
    return this.currentTime;
  }

  constructor() { }
}
