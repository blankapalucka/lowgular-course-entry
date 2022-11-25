import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {PersonModel} from "../model/person.model";
import {CreateEmployeeModel} from "../model/create-employee.model";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json')
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    // return this._httpClient.post('https://dummy.restapiexample.com/create', employee);
    return this._httpClient.post('https://jsonplaceholder.typicode.com/posts', employee);
  }

  delete(id: string): Observable<void> {
    // return this._httpClient.delete('https://dummy.restapiexample.com/api/v1/delete/'+ id)
    return this._httpClient.delete('https://jsonplaceholder.typicode.com/posts/' + id)
      .pipe(map(_ => void 0))

  }
}
