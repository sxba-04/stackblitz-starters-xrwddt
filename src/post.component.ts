// post.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: './post.component.css',
})
export class PostComponent {
  @Input() post: any;
  @Output() displayMessageEvent = new EventEmitter<string>();
  comments: any[] = [];

  addComment(commentContent: string): void {
    this.displayMessageEvent.emit('Kommentar erfolgreich hinzugefügt!');
  }

  ratePost(type: string): void {
    this.displayMessageEvent.emit(`You ${type}d this post!`);
  }

  deletePost(): void {
    this.displayMessageEvent.emit('Post erfolgreich gelöscht!');
  }
}
