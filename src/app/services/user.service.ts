import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/users';
  constructor(private AngularFireStore:AngularFirestore) { }

  AddNewUser(user:User){
    return this.AngularFireStore.collection(this.dbPath).add(user);
  }
  getAllUser(){
    return this.AngularFireStore.collection(this.dbPath).snapshotChanges();
  }
  getUserById(id: string) {
    return this.AngularFireStore.collection(this.dbPath).doc(id).valueChanges();
  }
  updateUserById(id: string|undefined,obj:any) {
    return this.AngularFireStore.collection(this.dbPath).doc(id).update({"bookings":obj});
  }
}
