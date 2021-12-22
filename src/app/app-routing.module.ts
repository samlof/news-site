import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlePageComponent } from 'src/app/article-page/article-page.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

const routes: Routes = [
  { path: 'article/:url', component: ArticlePageComponent },
  { path: '', component: HomePageComponent },
  { path: '**', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
