import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.css']
})
export class UserInfoFormComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      dob: ['', Validators.required],
    });
  }
  ngOnInit() {
   
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
