import { Injectable } from '@angular/core';
import { DrCategory } from '../models/DrCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
DoctorCategory:DrCategory[]=[
  {id:1,name:'Allergy and Immunology (Sensitivity and Immunity)'},
  {id:2,name:'Andrology and Male Infertility'},
  {id:3,name:'Audiology'},
  {id:4,name:'Cardiology and Thorcic Surgery (Heart / Chest)'},
  {id:5,name:'Cardiology and Vascular Disease (Heart)'},
  {id:6,name:'Chest and Respiratory'},
  {id:7,name:'Dentistry (Teeth)'},
  {id:8,name:'Dermatology (Skin)'},
  {id:9,name:'Diabetes and Endocrinology'},
  {id:10,name:'Diagnostic Radiology'},
  {id:11,name:'Dietician and Nutrition'},
  {id:12,name:'Ear, Nose and Throat'},
  {id:13,name:'Family medicine'},
  {id:14,name:'Gastroenterology and Endoscopy'},
  {id:15,name:'General Pracitce'},
  {id:16,name:'General Surgery'},
  {id:17,name:'Geriatrics (Old People Health)'},
  {id:18,name:'Gynaecology and Infertility'},
  {id:19,name:'Hematology'},
  {id:20,name:'Hepatology (Liver Doctor)'},
]

  AllDoctorCategory(){
    return [...this.DoctorCategory];
  }

}
