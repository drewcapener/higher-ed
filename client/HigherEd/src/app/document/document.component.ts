import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ArchiveDocument } from 'src/models/archive-document';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  @Input() document: ArchiveDocument;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  toTheatre(): void {
    //fixme do something here to store video
    this.router.navigate(['/lecture-theatre']);
  }

}
