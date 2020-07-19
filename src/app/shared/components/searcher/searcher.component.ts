import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/app/core/models/category.model';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  wordToSearch: string;
  category = '';
  categoryList: Category[] = [
    { value: 'science', text: 'Ciencia' },
    { value: 'education', text: 'Educación' },
    { value: 'people', text: 'Personas' },
    { value: 'feelings', text: 'Sentimientos' },
    { value: 'computer', text: 'Computadoras' },
    { value: 'buildings', text: 'Edificios' }
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  emitFilters() {
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.wordToSearch,
        category: this.category === '' ? null : this.category,
      },
    });
  }

}
