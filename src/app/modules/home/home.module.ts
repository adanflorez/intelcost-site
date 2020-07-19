import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './pages/search/search.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ImageDetailComponent } from './pages/image-detail/image-detail.component';

import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [HomeComponent, SearchComponent, ImageDetailComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    LazyLoadImageModule,
    NgxLoadingModule
  ]
})
export class HomeModule { }
