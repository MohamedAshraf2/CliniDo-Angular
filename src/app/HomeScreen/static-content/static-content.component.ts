import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.scss']
})
export class StaticContentComponent implements OnInit {
  currentLang:any;


  constructor(public translate:TranslateService,public lang:LanguageService) {
    this.currentLang=localStorage.getItem("currentLang")
   }

  ngOnInit(): void {
    // this.currentLang=this.lang.getLanguage();
    // console.log(this.currentLang)
  }

}
