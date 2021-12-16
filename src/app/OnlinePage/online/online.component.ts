import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { DrCategory } from './../../models/DrCategory.model';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
  DoctorCategory!:DrCategory[];
  doctorCarouselArr:Doctor[]=[];
  doctors!: Doctor[] ;
  numberOfPagesArray :number[]=[];
  pagesSize :number = 3 ;
  filterItem:any;
  currentPage:number = 0;

  constructor( private DoctorCatService:CategoryService,) { }

  ngOnInit(): void {
    this.DoctorCategory = this.DoctorCatService.AllDoctorCategory();

  }

}
