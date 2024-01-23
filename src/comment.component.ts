// comment.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: './comment.component.css',
})
export class CommentComponent {
  @Input() comment: any;
  @Output() displayMessageEvent = new EventEmitter<string>();

  addReply(replyContent: string): void {
    this.displayMessageEvent.emit('Antwort erfolgreich hinzugefügt!');
  }

  rateComment(type: string): void {
    const feedbackCount = this.comment[type + 's'] || 0;
    this.comment[type + 's'] = feedbackCount + 1;
    this.displayMessageEvent.emit(`You ${type}d this comment!`);
  }

  deleteComment(): void {
    this.displayMessageEvent.emit('Kommentar erfolgreich gelöscht!');
  }
}
