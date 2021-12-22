import { Component } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { HomePageQuery, HomePageQueryGQL } from 'src/app/generated/graphql';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  homepageQuery$: Observable<ApolloQueryResult<HomePageQuery>>;

  constructor(private homePageQueryGQL: HomePageQueryGQL) {
    this.homepageQuery$ = homePageQueryGQL.watch().valueChanges;
  }
}
