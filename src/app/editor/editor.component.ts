import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  title = "Default Title";
  description;
  body;

  constructor() { }

  ngOnInit(): void {
  }

}
