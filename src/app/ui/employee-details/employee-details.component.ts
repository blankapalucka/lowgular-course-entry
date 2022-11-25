import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { EmployeeDetailsParamsModel } from '../../model/employee-details-params.model';
import { EmployeeService } from '../../services/employee.service';
import {Employee} from "../../model/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {

  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params as Observable<EmployeeDetailsParamsModel>;
  readonly details$: Observable<Employee> = this._activatedRoute.params
    .pipe(switchMap(value => this._employeeService.getOne(value['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
  }
}
