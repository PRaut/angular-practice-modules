import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  _url; string = '/assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getEmployees(){
    // console.log(this.http.get<IEmployee[]>(this._url).subscribe( data => console.log(data)));
    return this.http.get<IEmployee[]>(this._url);
  }
}
