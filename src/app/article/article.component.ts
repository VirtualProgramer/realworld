import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Output() like = new EventEmitter<Article>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  likeAction(article: Article): void {
    this.like.emit(article);
  }

  gotoProfile(username) {
    this.router.navigate(['/profile', username]);
  }

}
