import { Component, Input, OnInit } from '@angular/core';
import { NewsCardFragment } from 'src/app/generated/graphql';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news!: NewsCardFragment;
  constructor() {}

  ngOnInit(): void {}
}
