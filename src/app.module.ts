// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importiere FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component'; // Importiere CommentComponent

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NewPostComponent,
    PostComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Füge FormsModule hinzu
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
