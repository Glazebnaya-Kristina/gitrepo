import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitrepoComponent } from './gitrepo.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CardComponent } from './card/card.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    GitrepoComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [GitrepoComponent, SearchComponent]
})
export class GitrepoModule { }
