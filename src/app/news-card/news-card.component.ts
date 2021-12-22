import { Component, Input } from '@angular/core';
import { NewsCardFragment } from 'src/app/generated/graphql';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() news!: NewsCardFragment;
  showImage = true;

  constructor() {}
  onImgError() {
    this.showImage = false;
  }
}
