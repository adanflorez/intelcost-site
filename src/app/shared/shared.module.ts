import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCardComponent } from './components/image-card/image-card.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [SearcherComponent, ImageCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    RouterModule
  ],
  exports: [
    SearcherComponent,
    ImageCardComponent
  ]
})
export class SharedModule { }
