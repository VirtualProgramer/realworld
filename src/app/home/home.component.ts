import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { Article } from './models/article.model';

const mockTagList: string[] = [
  'programming',
  'javascript',
  'emberjs',
  'angularjs',
  'react',
  'mean',
  'node',
  'rails'
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data$ = this.service.loadData().pipe(map(result => result.articles));
  tagList = mockTagList;

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  like(article: Article): void {
    article.favoritesCount += 1;
  }
}
