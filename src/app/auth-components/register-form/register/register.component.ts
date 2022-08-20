import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserAuthentication } from '../../models/auth.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  public registerFormGroup!: FormGroup;
  
  constructor(private fb: FormBuilder, private authService: AuthService) {
    // this.registerFormGroup = this.fb.group({
    //   name: [''],
    //   email: [''],
    //   password: ['']
    // })
   }

  ngOnInit(): void {
    this.registerFormGroup = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required]
    })
  }

  registerAction = () => {
  //   const userD = this.registerFormGroup.getRawValue() as UserAuthentication
  //   this.authService.register(userD).subscribe()
  this.authService.register(this.registerFormGroup.value).subscribe((res) => {
    if (res.result) {
      this.registerFormGroup.reset();
    }
  });

}

}
