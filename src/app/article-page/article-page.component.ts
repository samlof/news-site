import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from '@apollo/client/core';
import { Observable, of, switchMap } from 'rxjs';
import {
  ArticlePageQuery,
  ArticlePageQueryGQL,
} from 'src/app/generated/graphql';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
})
export class ArticlePageComponent {
  article$: Observable<ApolloQueryResult<ArticlePageQuery | null> | null>;
  showImage = true;

  constructor(
    private route: ActivatedRoute,
    private articlePageQuery: ArticlePageQueryGQL
  ) {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const url = params.get('url');
        if (!url) return of(null);

        return articlePageQuery.watch({ url }).valueChanges;
      })
    );
  }

  onImgError() {
    this.showImage = false;
  }

  urlHost(url: string): string {
    const u = new URL(url);
    return u.hostname;
  }
}
