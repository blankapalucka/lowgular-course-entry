import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../../model/employee.model';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _httpClient: HttpClient) {
  }

  data$: Observable<Employee[] | null> = this._httpClient.get<Employee[]>('assets/data/employees.json');
}
