import { Component, OnInit } from '@angular/core';
import { CityCatService } from 'src/app/services/city-cat.service';
import { DrCategory } from 'src/app/models/DrCategory.model';
import { NewDoctorService } from 'src/app/services/new-doctor.service';
import { DrCity } from 'src/app/models/DrCity.model';
import { Doctor } from 'src/app/models/Doctor.model';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { DrArea } from 'src/app/models/DrArea.model';
import { AreaCatService } from 'src/app/services/area-cat.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cityCat?:DrCity[];
  filterItem!:string;
  doctors!: Doctor[] ;
  specialities!:DrCategory[];
  inputValue:string="";
  doctorDisplay!:Doctor[];
  serchval!:string;
  cities!:DrCity[];
  areas!:DrArea[];
  selectedCity:DrCity=new DrCity(1,'Alexandria');


  constructor(private city:CityCatService,private docotrName:NewDoctorService,private category:CategoryService,private activat:ActivatedRoute,private AreaService:AreaCatService ) { }

  ngOnInit(): void {
    this.specialities=this.category.DoctorCategory;
    this.cityCat=this.city.CityCategory;
    this.docotrName.getAllDoctor().subscribe(res => {
    this.doctors = res.map(actions =>{
      const data = actions.payload.doc.data() as Doctor;
      data.id = actions.payload.doc.id;
      return {...data}
    })
    })

    this.activat.queryParams.subscribe(res=>{
    console.log(res.value);

    this.serchval= res.value ;
    this.filterItem=this.serchval;
   });
   this.cities=this.AreaService.getCities();
   this.onSelect(this.selectedCity.id);

  }
  clickme(username:string) {
    // console.log('it does nothing',username);
    this.doctors.map((res)=>{
      if(username== res.firstName){
        // this.doctorDisplay=[...this.doctorDisplay,res];
        this.doctorDisplay.push(res);
      }else{
        console.log(false)
      }
    })
    console.log(this.doctorDisplay);
  }
  onSelect(cityID:number){
    this.areas=this.AreaService.getAreas().filter((item)=>
      item.cityId==cityID);
  }

}
