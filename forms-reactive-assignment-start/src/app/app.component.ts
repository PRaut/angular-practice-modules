import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  projectForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit(): void {
   this.projectForm = new FormGroup({
    'projectname': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName.bind(this)] ,CustomValidators.asyncInvalidProjectName),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'projectstatus': new FormControl('Stable')
   });
  }

  onSubmit(){
    console.log(this.projectForm);
  }


}
