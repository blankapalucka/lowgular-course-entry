import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {EmployeeDetailsParamsModel} from "../../model/employee-details-params.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {

  readonly params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params as Observable<EmployeeDetailsParamsModel>;

  constructor(private _activatedRoute: ActivatedRoute) {
  }
}
