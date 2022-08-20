import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  public loginFormGroup: FormGroup

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) {
    this.loginFormGroup = this.fb.group({
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  loginAction = () => {
    // const userData = this.loginFormGroup.getRawValue() as UserAuthentication
    // this.userService.login(userData).subscribe()
    this.userService.register(this.loginFormGroup.getRawValue());
  }

  registerForm(){
    this.router.navigate(['register'])
  }

}
