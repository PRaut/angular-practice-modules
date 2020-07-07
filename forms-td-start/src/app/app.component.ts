import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 2nd way to access form data using @ViewChild()
  @ViewChild('f', { static: true }) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];

  formSubmitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    questionAnswer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }
  // 1st way to access form data
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.formSubmitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.questionAnswer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
