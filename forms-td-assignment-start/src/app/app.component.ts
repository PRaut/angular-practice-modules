import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', {static: false}) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'advanced';
  formSubmitted = false;
  user = {
    email: '',
    password: '',
    subscription: ''
  }


  onSubmit(){
    this.formSubmitted = true;  
    console.log(this.signupForm.value);
    this.user.email = this.signupForm.value.userData.email;
    this.user.password = this.signupForm.value.userData.password;
    this.user.subscription = this.signupForm.value.userData.subscription;

    this.signupForm.reset();
  }
}
