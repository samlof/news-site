import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'article/:url',
    loadChildren: () =>
      import('./article-page/article-page.module').then(
        (m) => m.ArticlePageModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./notfound-page/notfound-page.module').then(
        (m) => m.NotfoundPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
