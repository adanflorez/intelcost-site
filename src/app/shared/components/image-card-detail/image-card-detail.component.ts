import Image from 'src/app/core/models/image.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-card-detail',
  templateUrl: './image-card-detail.component.html',
  styleUrls: ['./image-card-detail.component.scss']
})
export class ImageCardDetailComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  /**
   * Begin life cycle
   */
  ngOnInit() {
  }

}
