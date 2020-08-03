import { FormNormalService } from './form-normal.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormControlBase } from '@shared/form';
import { FormControlService } from '@shared/form';

@Component({
  selector: 'app-form-normal',
  templateUrl: './form-normal.component.html',
  styleUrls: ['./form-normal.component.scss'],
})
export class FormNormalComponent implements OnInit {
  models: FormControlBase<string>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(
    private fcs: FormControlService,
    private formNormalService: FormNormalService
  ) {}

  ngOnInit(): void {
    this.formNormalService.getControls().subscribe((res) => {
      this.models = res;
      this.form = this.fcs.toFormGroup(res);
    });
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
