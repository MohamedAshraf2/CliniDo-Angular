import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  arrowDir:boolean = true;
  currentLang:any;

handleOpen(){
  this.arrowDir=!this.arrowDir
}

  constructor(public translate:TranslateService) {
    this.currentLang=localStorage.getItem("currentLang");
  }

  ngOnInit(): void {
  }

}
