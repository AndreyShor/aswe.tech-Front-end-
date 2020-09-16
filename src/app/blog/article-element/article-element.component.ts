import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-element',
  templateUrl: './article-element.component.html',
  styleUrls: ['./article-element.component.scss']
})
export class ArticleElementComponent implements OnInit {
   
  @Input() title: string;
  @Input() description: string;
  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
