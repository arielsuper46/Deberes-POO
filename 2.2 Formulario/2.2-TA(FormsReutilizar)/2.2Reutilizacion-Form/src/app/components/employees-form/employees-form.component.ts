import { Component } from '@angular/core';
import {
  NzFormControlComponent,
  NzFormDirective,
  NzFormItemComponent,
  NzFormLabelComponent,
} from 'ng-zorro-antd/form';
import { NzColDirective } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputDirective } from 'ng-zorro-antd/input';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';

import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { ApiService } from '../../services/api.service';
import { NzInputNumberComponent } from 'ng-zorro-antd/input-number';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Validators as MyValidators } from '@angular/forms';

@Component({
  selector: 'app-employees-form',
  standalone: true,
  imports: [
    NzFormItemComponent,
    NzFormDirective,
    NzFormLabelComponent,
    NzFormControlComponent,
    NzColDirective,
    ReactiveFormsModule,
    NzInputDirective,
    NzDatePickerComponent,
    NzButtonComponent,
    NzInputNumberComponent,
  ],
  templateUrl: './employees-form.component.html',
  styleUrl: './employees-form.component.css',
})
export class EmployeesComponent {
  validateForm: FormGroup<{
    id: FormControl<number>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    role: FormControl<string>;
    department: FormControl<string>;
    hireDate: FormControl<Date | null>;
    salary: FormControl<number>;
  }>;

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.apiService.createEmployee(this.validateForm.value).subscribe(() => {
        this.createNotification(
          'success',
          `${this.validateForm.value.firstName} ${this.validateForm.value.lastName}`,
          'Employee has been created successfully!'
        );
        this.validateForm.reset();
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  employees: any[] = [
    {
      id: 1,
      firstName: 'Anthonio',
      lastName: 'Gonzales',
      role: 'Supervisor',
      department: 'Advertising',
      hireDate: new Date(),
      salary: 30000,
    },
    {
      id: 2,
      firstName: 'Kennet',
      lastName: 'Quirpiraimi',
      role: 'Technical',
      department: 'Software',
      hireDate: new Date(),
      salary: 60000,
    },
  ];

  createNotification(type: string, title: string, message: string): void {
    this.notification.create(type, title, message);
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private apiService: ApiService,
    private notification: NzNotificationService
  ) {
    const { required } = MyValidators;
    this.validateForm = this.fb.group({
      id: [0,[required]],
      firstName: ['', [required]],
      lastName: ['', [required]],
      role: ['', [required]],
      department: ['', [required]],
      hireDate: this.fb.control<Date | null>(null),
      salary: [0, [required]],
    });
  }

  editEmployee(employeeId: number) {
    const selectedEmployee = this.employees.find(
      (emp) => emp.id === employeeId
    );
    if (selectedEmployee) {
      
      this.validateForm.setValue({
        id:selectedEmployee.id,
        firstName: selectedEmployee.firstName,
        lastName: selectedEmployee.lastName,
        role: selectedEmployee.role,
        department: selectedEmployee.department,
        hireDate: new Date(selectedEmployee.hireDate),
        salary: selectedEmployee.salary,
      });
    }
  }
}
