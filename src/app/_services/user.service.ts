import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<firebase.User>;
  adminEmailRef: Observable<any[]> | AngularFireList<any>;
  userDbRef: Observable<any[]> | AngularFireList<any>;
  private authState: any;


  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  registerUser(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(val => {
        console.log(this.authState);
        console.log('success!', val);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      }
    );
  }

  addUser(user) {
    this.userDbRef = this.db.list('/users');
    const newUser = this.userDbRef.push(user);
    newUser.update({id: newUser.key});
  }

  login(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(val => {
        console.log('Logged in', val);
        this.user = val;
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

  registerAdminEmail(email: string) {
    this.adminEmailRef = this.db.list('/registeredEmails');
    const newUser = this.adminEmailRef.push({email: email});
    newUser.update({id: newUser.key});
  }

  getRegisteredEmails() {
    this.adminEmailRef = this.db.list('/registeredEmails').valueChanges();
    return this.adminEmailRef;
  }
}
