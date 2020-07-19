import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.pixabayUrl;

  constructor(
    private http: HttpClient
  ) { }

  searchImages(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
