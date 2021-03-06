import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {PapersComponent} from "./papers/papers.component";
import {ContactsComponent} from "./contacts/contacts.component";



const routes: Routes = [
  { path: '', redirectTo: '/aboutme', pathMatch: 'full' },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'papers', component: PapersComponent },
  { path: 'contacts', component: ContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
