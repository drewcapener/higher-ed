import { Component, OnInit } from '@angular/core';
import { Archive } from 'src/models/archive';
import { ArchiveDocument } from 'src/models/archive-document';

@Component({
  selector: 'app-archive-documents',
  templateUrl: './archive-documents.component.html',
  styleUrls: ['./archive-documents.component.scss']
})
export class ArchiveDocumentsComponent implements OnInit {

  documents: any[] = [
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
    new ArchiveDocument('Intro to QR Decomposition', '../../assets/demo.mp4', 
      'This is the lecture material designed to introduce you to the QR Decomposition of a matrix.'),
  ];
  archive: Archive = new Archive(null, this.documents);

  constructor() { }

  ngOnInit(): void {
  }

}
