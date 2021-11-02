import { Component, OnInit } from '@angular/core';
import { Paper } from './paper'

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  paper : Paper = {
    authors: ['first', 'second'],
    key: 'string',
    title: 'string',
    venue: 'string',
    year: 123
  }

  constructor() { }

  ngOnInit(): void {
  }


}
