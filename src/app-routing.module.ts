// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'post/:id', component: PostComponent },
  // Füge weitere Routen hinzu, falls erforderlich
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
