import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaperComponent } from './paper/paper.component';
import { PapersComponent } from './papers/papers.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MedallionComponent } from './medallion/medallion.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    PapersComponent,
    AboutmeComponent,
    MedallionComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
