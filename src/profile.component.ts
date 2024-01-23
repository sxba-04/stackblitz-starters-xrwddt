// profile.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  currentUser = {
    name: '',
    email: '',
    nickname: '',
  };

  createProfile(): void {
    if (
      this.currentUser.name.length >= 2 &&
      this.currentUser.nickname.length >= 2 &&
      this.currentUser.email.length >= 6 &&
      this.currentUser.email.includes('@')
    ) {
      // Speichere die Profildaten oder führe andere Aktionen aus
      alert('Profil erfolgreich erstellt!');
    } else {
      alert(
        'Bitte geben Sie gültige Profilinformationen ein. Ihr Name und Spitzname müssen mindestens 2 Zeichen lang sein, und Ihre E-Mail-Adresse muss mindestens 6 Zeichen lang sein und das @-Zeichen enthalten.'
      );
    }
  }
}
