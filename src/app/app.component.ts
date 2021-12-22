import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'oivan-news';

  constructor(private apollo: Apollo) {}
}
