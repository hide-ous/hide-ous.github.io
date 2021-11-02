import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaperComponent } from './paper/paper.component';
import { PapersComponent } from './papers/papers.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    PapersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
