import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageFeedComponent } from './components/image-feed/image-feed.component';
import { ImageResolver } from './services/resolvers/image.resolver';
import { ImagesResolver } from './services/resolvers/images.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: ImageFeedComponent, resolve: {home: ImagesResolver}},
  { path: 'photo/:id', component: ImageDetailsComponent, resolve: {image : ImageResolver} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
