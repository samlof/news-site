import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ApolloModule,
    MatIconModule,
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
