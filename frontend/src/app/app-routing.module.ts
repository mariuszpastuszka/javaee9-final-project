import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { HOME_URL, NEW_POST_URL, NEWS_FEED_URL } from './constants/constant';

const routes: Routes = [
  // using address localhost:4200/recent-posts will render NewsFeedComponent
  { path: NEWS_FEED_URL, component: NewsFeedComponent },
  // using address localhost:4200/add-post will render NewsFormComponent
  { path: NEW_POST_URL, component: NewsFormComponent },
  { path: HOME_URL, redirectTo: NEWS_FEED_URL, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
