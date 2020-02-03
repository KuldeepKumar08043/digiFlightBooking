import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userValidate: boolean = false;
  constructor(private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSubmit(){
    if(this.loginForm.valid) {
      console.log('submit', this.loginForm.value);
      if((this.loginForm.value.email === 'admin@gmail.com') && (this.loginForm.value.password === 'admin')){
        this.route.navigate(['booking-dashboard']);
        this.userValidate = false;
      }else{
        this.userValidate = true;
      }
    }
  }

}
