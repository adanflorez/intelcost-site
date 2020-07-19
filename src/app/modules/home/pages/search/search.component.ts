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
  loading = true;

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
    this.loading = true;
    this.currentPage = this.page;
    this.searchService.searchImages(this.category, this.wordToSearch, this.page).subscribe(res => {
      this.totalItems = res.total;
      this.images = res.hits;
      this.loading = false;
    }, err => {
      console.error(err);
      this.loading = false;
    });
  }

  gg(e: any) {
    console.log(e);
    this.page = e;
  }

}
