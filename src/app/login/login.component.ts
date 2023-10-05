import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  });

  // For validation userEmail
  get userEmail(){
    return this.loginForm.get("userEmail");
  }
  // For validation password
  get password(){
    return this.loginForm.get("password");
  }
  
  // form data submit function
  login(): void {
    if(this.loginForm.valid){
      // go to database and collect user name and password and compare
      if(this.loginForm.value.userEmail == "mahsin.cse@gmail.com" && this.loginForm.value.password == "58259"){
        // login success
        console.log("login success");
      }else{
        // show message for invalid login credential 
        console.error("login fail");
      }
    }else{
      //show alert for invalid data 
    }
  }
}
