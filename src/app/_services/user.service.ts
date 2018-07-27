import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { FirebaseApp } from 'angularfire2';
import { AngularFireList, AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  userLoggedIn: boolean;
  adminEmailRef: Observable<any[]> | AngularFireList<any>;
  userDbRef: Observable<any[]> | AngularFireList<any>;
  private authState: any;
  loggedInUser: any;


  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
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
        this.verifyUser();
        console.log(this.loggedInUser);
      })
      .catch(err => {
        console.error('Something went wrong:', err.message);
      }
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
    if (this.userLoggedIn) { return true; }
    this.router.navigate(['/login']);
    return false;
  }

  verifyUser() {
    this.user = this.afAuth.auth.currentUser;
    if (this.user) {
      this.loggedInUser = this.user;
      this.userLoggedIn = true;
      this.router.navigate(['/admin/home']);
    }
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
