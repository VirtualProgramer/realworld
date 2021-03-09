import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
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

  page$ = new BehaviorSubject(0);
  source$ = this.page$.pipe(
    switchMap(offset =>
      this.service.loadData({ offset })
    ),
    shareReplay()
  );
  data$ = this.source$.pipe(map(result => result.articles));
  tagList = mockTagList;

  totalCount$ = this.source$.pipe(map(result => result.articlesCount));

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  like(article: Article): void {
    article.favoritesCount += 1;
  }

  pageChange(idx) {
    this.page$.next(idx * 20);
  }
}
