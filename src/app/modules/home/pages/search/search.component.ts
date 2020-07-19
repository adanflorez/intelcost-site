import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/core/services/search.service';
import Image from 'src/app/core/models/image.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  category: string;
  wordToSearch: string;
  images: Image[];
  currentPage = 1;
  page: number;
  totalItems: number;

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.wordToSearch = params['q'];
      this.loadImages();
    });
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.loadImages();
  }

  loadImages() {
    this.searchService.searchImages(this.category, this.wordToSearch, this.page).subscribe(res => {
      console.log(res);
      this.totalItems = res.total;
      this.images = res.hits;
    }, err => {
      console.error(err);
    });
  }

}
