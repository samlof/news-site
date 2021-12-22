import { Component, OnInit } from '@angular/core';
import { HomePageQueryGQL } from 'src/app/generated/graphql';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private homePageQueryGQL: HomePageQueryGQL) {}

  ngOnInit(): void {}
}
