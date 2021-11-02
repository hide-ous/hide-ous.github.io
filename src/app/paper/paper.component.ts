import { Component, OnInit } from '@angular/core';
import { Paper } from './paper'

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  paper : Paper = {
    authors: ['first author', 'second author'],
    key: 'string',
    title: 'the title',
    venue: 'the venue',
    year: 123
  }

  constructor() { }

  ngOnInit(): void {
  }


}
