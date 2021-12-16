import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/models/Doctor.model';
import { DrArea } from 'src/app/models/DrArea.model';
import { DrCategory } from 'src/app/models/DrCategory.model';
import { DrCity } from 'src/app/models/DrCity.model';
import { AreaCatService } from 'src/app/services/area-cat.service';
import { CategoryService } from 'src/app/services/category.service';
import { CityCatService } from './../../services/city-cat.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.scss']
})
export class FindDoctorComponent implements OnInit {
  @ViewChild("doctorForm",{static:true}) doctorForm!:NgForm;
  DoctorForm=<Doctor>{};
  DoctorCategory!:DrCategory[];
  CityCategory!:string[];
  CitiesCategory!:string[];
  doctors!:Doctor[];
  AreaCategory!:any;
  filterItem:any;
  selectedCity:DrCity=new DrCity(1,'Alexandria');
  cities!:DrCity[];
  areas!:DrArea[];
  currentLang:any;



  constructor(private DoctorCatService:CategoryService,private AreaService:AreaCatService,public translate:TranslateService) {
    this.DoctorForm={
      firstName:'',
      lastName:'',
      mobile:0,
      drCategory:[],
      drArea:[],
      drCity:[]
    }
    this.currentLang=localStorage.getItem("currentLang");
   }

  ngOnInit(): void {
    this.DoctorCategory=this.DoctorCatService.AllDoctorCategory();
    this.cities=this.AreaService.getCities();
    this.onSelect(this.selectedCity.id);
  }
  onSelect(cityID:number){
    this.areas=this.AreaService.getAreas().filter((item)=>
      item.cityId==cityID)
  }
  // changeCurrentLang(lang:string){
  //   this.translate.use(lang);
  //   localStorage.setItem('currentLang',lang)
  // }
}
