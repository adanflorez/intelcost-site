import { NgxLoadingModule } from 'ngx-loading';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from './components/image-card/image-card.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ImageCardDetailComponent } from './components/image-card-detail/image-card-detail.component';

@NgModule({
  declarations: [SearcherComponent, ImageCardComponent, ImageCardDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    RouterModule,
    NgxLoadingModule
  ],
  exports: [
    SearcherComponent,
    ImageCardComponent,
    ImageCardDetailComponent
  ]
})
export class SharedModule { }
