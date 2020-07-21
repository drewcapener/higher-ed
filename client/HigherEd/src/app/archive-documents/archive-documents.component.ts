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
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null),
    new ArchiveDocument(null, null)
  ];
  archive: Archive = new Archive(null, this.documents);

  constructor() { }

  ngOnInit(): void {
  }

}
