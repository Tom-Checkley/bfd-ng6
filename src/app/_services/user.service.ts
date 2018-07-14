import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  registerUser(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(val => {
        console.log('success!', val);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      }
    );
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(val => {
        console.log('Logged in');
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      }
    );
  }

  logout() {
    this.afAuth
      .auth
      .signOut();
  }
}
