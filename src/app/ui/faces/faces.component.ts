import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../model/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-faces',
  templateUrl: './faces.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FacesComponent {
  data$: Observable<Employee[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {
  }
}
