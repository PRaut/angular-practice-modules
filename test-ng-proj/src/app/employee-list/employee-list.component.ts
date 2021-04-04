import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { IEmployee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  employees = new Array<IEmployee>();

  constructor(private _empListService: EmployeeServiceService) { }

  ngOnInit(): void {
    this._empListService.getEmployees().subscribe( data => {
      // console.log(data);
      this.employees = data;
    });
  }

}
