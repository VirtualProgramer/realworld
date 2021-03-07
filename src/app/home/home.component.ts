import { Component, OnInit } from '@angular/core';
import { title } from 'process';

const mockData: Article[] = [
  {
    avator: 'http://i.imgur.com/Qr71crq.jpg',
    author: 'Eric Simons',
    publishDate: new Date('2020-01-20'),
    likes: 29,
    title: 'How to build webapps that scale',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, odio cum nemo veniam incidunt dicta rem facere dignissimos aliquam reiciendis molestiae nostrum ea a, unde debitis similique quos reprehenderit voluptatibus.'
  },
  {
    avator: 'http://i.imgur.com/N4VcUeJ.jpg',
    author: 'Albert Pai',
    publishDate: new Date('2020-01-20'),
    likes: 32,
    title: `The song you won't ever stop singing. No matter how hard you try.`,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur enim velit minus nihil delectus est porro! Magnam libero fugit sunt alias laboriosam quo expedita voluptate. Facere necessitatibus eligendi ut sed?'
  }
];

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

  data = mockData;
  tagList = mockTagList;

  constructor() { }

  ngOnInit(): void {
  }

  like(article: Article): void {
    article.likes += 1;
  }
}

export interface Article {
  avator: string;
  author: string;
  publishDate: Date;
  likes: number;
  title: string;
  content: string;
}
