import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { NewDoctorService } from 'src/app/services/new-doctor.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  doctorCarouselArr:Doctor[]=[];
  doctors!: Doctor[] ;
  numberOfPagesArray :number[]=[];
  pagesSize :number = 3 ;
  currentPage:number = 0;
  filterItem:any;

  currentLang:any;
  constructor(
    private CrudService:NewDoctorService,
  ) {
    this.currentLang=localStorage.getItem("currentLang")
  }

  ngOnInit(): void {
    this.CrudService.getAllDoctor().subscribe(res => {
      this.doctors = res.map(actions =>{
        const data = actions.payload.doc.data() as Doctor;
        data.id = actions.payload.doc.id;
        return {...data}
      })

      console.log(this.doctors);

      this.sliceArray();
      this.calculatePageNumbers();
      })

  }

calculatePageNumbers(){
  const numberOfPages = Math.ceil(this.doctors.length/this.pagesSize);
  for (let index = 0; index < numberOfPages; index++) {
   this.numberOfPagesArray.push(index+1);
  }
}


sliceArray(){
    this.doctorCarouselArr = this.doctors.slice(this.currentPage * this.pagesSize , (this.currentPage*this.pagesSize)+this.pagesSize)
  }

  onpagintion(i:number){
    if(i > -1 && i < this.numberOfPagesArray.length){
      this.currentPage=i;
      this.sliceArray();
    }
  }
}
