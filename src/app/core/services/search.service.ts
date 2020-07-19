import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.pixabayUrl;

  /**
   * Constructor
   *
   * @param http HttpClient
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Search images
   *
   * @param category category (science, education, people, feelings, computer, buildings)
   * @param q word to search
   * @param page page to filter
   */
  searchImages(category: string, q: string, page: number = 1): Observable<any> {
    const params = {};
    params['per_page'] = 9;
    params['page'] = page;
    if (category) {
      params['category'] = category;
    }
    if (q) {
      params['q'] = q;
    }
    return this.http.get(this.baseUrl, { params });
  }

  /**
   * Search image by id
   *
   * @param id image id to filter
   */
  searchImageById(id: string): Observable<any> {
    return this.http.get(this.baseUrl + '?id=' + id);
  }
}
