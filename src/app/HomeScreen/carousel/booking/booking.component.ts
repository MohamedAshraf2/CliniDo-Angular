import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/Booking.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { BookingService } from 'src/app/services/booking.service';
import { NewDoctorService } from 'src/app/services/new-doctor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  doctor!: Doctor;
  booking:Booking[]=[];
  bookingForm!: FormGroup;
  bookingInfo!: Booking;
  bookinglist:Booking[]= [];
  constructor(
    private DoctorService: NewDoctorService,
    private BookingService: BookingService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.DoctorService.getDoctorById(res.id).subscribe((res) => {
        this.doctor = res as Doctor;
      });
    });
    this.bookingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
    this.BookingService.getAllBooking().subscribe(res => {
      this.booking = res.map(actions =>{
        const data = actions.payload.doc.data() as Booking;
        data.id = actions.payload.doc.id;
        return {...data}
      })
    })

  }
  onSubmit() {
    const id = localStorage.getItem("user") as string;
    this.bookingInfo = {
      DoctorName: this.doctor.firstName,
      DoctorPhone: this.doctor.mobile,
      DoctorCategory: this.doctor.drCategory,
      name: this.bookingForm.value['name'],
      phone: this.bookingForm.value['phone'],
      email: this.bookingForm.value['email'],
      resevationTime: new Date()
    };
    this.BookingService.AddNewBooking(this.bookingInfo);
    this.bookinglist=[...this.bookinglist,this.bookingInfo]
    this.userService.updateUserById(id,this.bookinglist)
  }

  onDetails(){
    this.router.navigate(['/bookingDetails'], { state: this.bookingInfo });
  }
}
