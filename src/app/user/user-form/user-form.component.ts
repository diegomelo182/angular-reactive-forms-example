import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(
      '',
      [Validators.required]
    ),
    email: new FormControl(
      '',
      [Validators.required, Validators.email]
    ),
    age: new FormControl(
      '',
      [Validators.required]
    ),
    birthDate: new FormControl(
      '',
      [Validators.required]
    ),
    type: new FormControl(
      '',
      [Validators.required]
    ),
  });

  constructor() { }

  ngOnInit(): void {}

  formSubmit() {
    alert(JSON.stringify(this.userForm.value));
  }

}
