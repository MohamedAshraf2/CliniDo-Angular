import { Doctor } from 'src/app/models/Doctor.model';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDoctorService {
  private dbPath = '/Doctor';
  constructor(private AngularFireStore:AngularFirestore) { }
  getAllDoctor(){
    return this.AngularFireStore.collection(this.dbPath).snapshotChanges();
  }
  AddNewDoctor(Doctor:Doctor){
    return this.AngularFireStore.collection(this.dbPath).add(Doctor);
  }
  getDoctorById(id: string) {
    return this.AngularFireStore.collection(this.dbPath).doc(id).valueChanges();
  }
}
