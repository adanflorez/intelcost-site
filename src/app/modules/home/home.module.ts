import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './pages/search/search.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    LazyLoadImageModule,
    PaginationModule.forRoot()
  ]
})
export class HomeModule { }
