import { Doctor } from './../../../models/Doctor.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewDoctorService } from 'src/app/services/new-doctor.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
doctor!:Doctor;
currentLang:any;
  constructor(private DoctorService:NewDoctorService,private activatedRoute:ActivatedRoute) {
    this.currentLang=localStorage.getItem("currentLang")
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res)=>{
      this.DoctorService.getDoctorById(res.id).subscribe(res => {
        this.doctor = res as Doctor;
    });
  })
  console.log(this.doctor);

  this.ShowClinInfo();
  // this.ShowRatingReviews();

}

   ShowClinInfo(){
      $('#clinic-info').css('display', 'block');
      $('#ratingReviews').css('display', 'none');
      $('#ShowClinInfo').addClass('active');
      $('#ShowRatingReviews').removeClass('active');
  }

   ShowRatingReviews(){
      $('#ratingReviews').css('display', 'block');
      $('#clinic-info').css('display', 'none');
      $('#ShowRatingReviews').addClass('active');
      $('#ShowClinInfo').removeClass('active');
  }

}
