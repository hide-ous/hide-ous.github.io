import {Component, Input, OnInit} from '@angular/core';
import { Paper } from './paper'

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css']
})
export class PaperComponent implements OnInit {

  @Input() paper: Paper|undefined;

  constructor() {

  }

  ngOnInit(): void {
  }


}
