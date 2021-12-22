import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { NewsCardComponent } from './news-card/news-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    HomePageComponent,
    ArticlePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApolloModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => {
        return {
          cache: new InMemoryCache(),
          uri: 'https://iwa-test.herokuapp.com/graphql',
        };
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
