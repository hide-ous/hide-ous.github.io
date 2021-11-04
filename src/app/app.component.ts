import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Mattia Samory, PhD';

  constructor(
    private metaTagService: Meta,
    private titleService: Title
  ) {
    this.metaTagService = metaTagService;
    this.titleService = titleService;
  }

  ngOnInit() {
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Mattia Samory, Samory, content moderation' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Mattia Samory' },
      { name: 'description', content: 'Personal website of Mattia Samory, postdoctoral scholar in social computing at GESIS CSS and Team Leader for Data Science Methods'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2021-11-04', scheme: 'YYYY-MM-DD' },
      { charset: 'utf-8' }
    ]);
    this.titleService.setTitle(this.title)
  }
}
