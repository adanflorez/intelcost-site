import Image from 'src/app/core/models/image.model';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  imageId: string;
  image: Image;
  loading = true;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.params.id;
    this.searchService.searchImageById(this.imageId).subscribe(res => {
      console.log(res);
      this.image = res.hits[0];
      this.loading = false;
    }, err => {
      console.error(err);
      this.loading = false;

    });
  }

}
