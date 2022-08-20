import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  userFormGroup: FormGroup;
  userData: User[] = [];
  userId: any
 constructor(private fb: FormBuilder) { 
  this.userFormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    name: ['', [Validators.required]],
    bio: ['', [Validators.required]],
    active: ['', [Validators.required]]
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
