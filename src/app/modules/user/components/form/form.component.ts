import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //email = new FormControl('', [Validators.required, Validators.email]);
  
  userFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.userFormGroup = this.fb.group({
      email: [''],
      name: [''],
      bio: [''],
      active: ['']
    })
  }
  ngOnInit(): void {
  }
  
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  
  get email(){
    return this.userFormGroup.get('email') as FormControl
  }

  get name(){
    return this.userFormGroup.get('name') as FormControl
  }

  get bio(){
    return this.userFormGroup.get('bio') as FormControl
  }

  submit(): void {
    console.log(this.userFormGroup?.value);
  }
  clear(): void {
    this.userFormGroup.reset();
  }

}
