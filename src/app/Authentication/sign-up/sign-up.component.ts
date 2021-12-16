import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  signUp!: any;
  constructor( public authService: AuthService ,private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
    });
  }
  onSubmit(){
    this.authService.SignUp(this.signupForm.value)
  }
}
