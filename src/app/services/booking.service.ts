import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Booking } from '../models/Booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private dbPath = '/Booking';
  constructor(private AngularFireStore:AngularFirestore) { }

  AddNewBooking(Booking:Booking){
    return this.AngularFireStore.collection(this.dbPath).add(Booking);
  }
  getAllBooking(){
    return this.AngularFireStore.collection(this.dbPath).snapshotChanges();
  }
  getBookById(id: string) {
    return this.AngularFireStore.collection(this.dbPath).doc(id).valueChanges();
  }
}
