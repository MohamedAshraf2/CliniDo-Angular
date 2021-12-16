import { DrCity } from './../models/DrCity.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityCatService {
  CityCategory:DrCity[]=[
    {id:1,name:'Alexandria'},
    {id:2,name:'Cairo'},
    {id:3,name:'Assuit'},
    {id:4,name:'Beni Suef'},
    {id:5,name:'Damietta'},
    {id:6,name:'El Beheira'},
    {id:7,name:'El Dakahlia'},
    {id:8,name:'El Ismailia'},
    {id:9,name:'Minia'},
    {id:10,name:'El Sharqia'},
    {id:11,name:'Fayoum'},
    {id:12,name:'Gharbia'},
    {id:13,name:'Giza'},
    {id:14,name:' Hurghada'},
    {id:15,name:'Kafr El Sheikh'},
    {id:16,name:'Luxor'},
    {id:17,name:'Matrouh'},
    {id:18,name:'Menoufia'},
    {id:19,name:'North Coast'},
    {id:20,name:' Port Said'},
    {id:21,name:' Qena'},
    {id:22,name:' Sohag'},
    {id:23,name:' Suez'},
    {id:24,name:' Sharm El Sheikh'},
]

    AllDoctorCity(){
      return [...this.CityCategory];
    }

}
