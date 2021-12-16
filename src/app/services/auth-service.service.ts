import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';


import { FacebookAuthProvider, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userData: any;

  constructor(
    public firebaseAuth: AngularFireAuth,
     public ngZone: NgZone,
     public router: Router,
     public afs: AngularFirestore,
     ){

    this.firebaseAuth.authState.subscribe( user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', this.userData.uid);
           localStorage.getItem('user');
      }
    })
  }


  SignIn(email:string, password:string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      }).then(
        ()=>{
          window.location.reload();
        }
      )
      .catch((error) => {
        window.alert(error.message)
      })
  }

  SignUp(form:any) {
    return this.firebaseAuth.createUserWithEmailAndPassword(form.email, form.password)
    .then((result) => {
      this.SendVerificationMail();
      this.SetUserData(result.user as User,form.displayName);
    }).catch((error) => {
      window.alert(error.message)
    })
  }



  SetUserData(user:User,displayName:string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    console.log(user);
    this.userData  = {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(this.userData, {
      merge: true
    })
  }

  GoogleAuth() {
    return this.AuthLogin( new GoogleAuthProvider());
  }

  FaceAuth(){
    return this.AuthLogin( new FacebookAuthProvider());
  }

  GitAuth(){
    return this.AuthLogin( new GithubAuthProvider());
  }
  AuthLogin(provider:any) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
         this.router.navigate(['']);
        })
    }).then(()=> {
      window.location.reload();
    }).catch((error) => {
      window.alert(error)
    })
  }


  SendVerificationMail() {
   return this.firebaseAuth.authState.subscribe(
      (user) => user?.sendEmailVerification().then(() => {
          this.router.navigate(['verify-email-address']);
        })
      )}


  ForgotPassword(passwordResetEmail:any) {
    return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }


  SignOut() {
    return this.firebaseAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    }).then(()=>{
      window.location.reload();
    })
  }


    }
