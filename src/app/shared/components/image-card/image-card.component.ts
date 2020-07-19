import { Component, OnInit, Input } from '@angular/core';
import Image from 'src/app/core/models/image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  /**
   * Begin life cycle
   */
  ngOnInit() {
  }

}
