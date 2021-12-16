import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate:TranslateService, public authService: AuthService) { }
  local!:boolean;


  ngOnInit(): void {
    this.isLocal()
  }

 isLocal()
    {
      if (localStorage.getItem('user'))
      {
         this.local=true;
      }else{
        this.local=false;
      }
    }



}




