import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Employee} from "../../model/employee.model";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  data$: Observable<Employee[]> = this._httpClient.get<Employee[]>('assets/data/employees.json')
  constructor(private _httpClient: HttpClient) {
  }
}
