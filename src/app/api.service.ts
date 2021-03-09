import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articles } from './home/models/article.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'https://conduit.productionready.io';

  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get<Articles>(`${this.baseUrl}/api/articles`).pipe(
      map(result => {
        result.articles.forEach(article => {
          article.createdAt = new Date(article.createdAt);
          article.updatedAt = new Date(article.updatedAt);
        });
        return result;
      })
    );
  }
}
