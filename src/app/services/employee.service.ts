import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee} from "../model/employee.model";
import {Observable} from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>('assets/data/employees.json')
  }
}
