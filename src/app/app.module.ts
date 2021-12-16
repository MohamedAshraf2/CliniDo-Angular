import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorFormComponent } from './DoctorForm/doctor-form/doctor-form.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { FindDoctorComponent } from './HomeScreen/find-doctor/find-doctor.component';
import { CarouselComponent } from './HomeScreen/carousel/carousel.component';
import { StaticContentComponent } from './HomeScreen/static-content/static-content.component';
import { CardComponent } from './Layout/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './HomeScreen/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OnlineComponent } from './OnlinePage/online/online.component';
import { DoctorDetailsComponent } from './HomeScreen/carousel/doctor-details/doctor-details.component';
import { BookingComponent } from './HomeScreen/carousel/booking/booking.component';
import { BookingDetailsComponent } from './HomeScreen/carousel/booking-details/booking-details.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { LoginamdsignupComponent } from './Authentication/loginamdsignup/loginamdsignup.component';
import { ForgotPasswordComponent } from './Authentication/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Authentication/verify-email/verify-email.component';
import { AuthService } from './services/auth-service.service';
import { DashboardComponent } from './Authentication/dashboard/dashboard.component';
import { LanguageComponent } from './HomeScreen/language/language.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    DoctorFormComponent,
    HeaderComponent,
    FooterComponent,
    FindDoctorComponent,
    CarouselComponent,
    StaticContentComponent,
    CardComponent,
    SearchComponent,
    OnlineComponent,
    DoctorDetailsComponent,
    BookingComponent,
    BookingDetailsComponent,
    LoginComponent,
    SignUpComponent,
    LoginamdsignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DashboardComponent,
    LanguageComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }
    }),
  ],
  exports: [
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18/','.json')
}
