import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
//import { UserAuthentication } from 'src/app/auth-components/models/auth.interface';
import { User } from 'src/app/user/models/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private token: string = ''
  endpoint: string = '';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private http: HttpClient, private router: Router) { }

  register = (userData: User): Observable<any> => {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, userData).pipe(
    tap(()=> {
      alert("Success! You may now login")
      this.router.navigate(['/login'])
    }));
  }

  login = (userData: User) => {
    // return this.http.post(`${environment.url}/login`, userData).pipe(
    //   tap((auth: any) => {
    //     this.token = auth.accessToken;
    //     this.router.navigate(['profile'])
    //   })
    // )
    return this.http
      .post(`${this.endpoint}/login`, userData)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.accessToken);
        this.router.navigate(['profile']);
      });  
  }

  getToken(){
    // return this.token? true : false
    return localStorage.getItem('access_token');
  }

  isLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  get isLogin(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }




}
