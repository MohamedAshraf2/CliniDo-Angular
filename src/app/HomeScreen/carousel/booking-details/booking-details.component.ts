import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from '@firebase/util/dist/src/obj';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/Booking.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {
  bookingDetails!: Booking;
  doctor!: Doctor;
  constructor() {
  }
  ngOnInit(): void {
    this.bookingDetails = window.history.state;
  }
}
