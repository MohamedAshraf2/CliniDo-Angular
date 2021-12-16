import { Doctor } from 'src/app/models/Doctor.model';
import { Component, Input, OnInit } from '@angular/core';
import { NewDoctorService } from 'src/app/services/new-doctor.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() doctor!: Doctor;

  constructor(public translate:TranslateService) {}

  ngOnInit(): void {}
}
