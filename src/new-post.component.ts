// new-post.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  title: string = '';
  content: string = '';

  submitPost(): void {
    if (this.title.length >= 3 && this.content.length >= 3) {
      // Erstelle den neuen Post oder führe andere Aktionen aus
      alert('Post erfolgreich erstellt!');
    } else {
      alert('Titel und Inhalt müssen mindestens 3 Zeichen lang sein.');
    }
  }
}
