import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login-form/login/login.component';
import { RegisterComponent } from './auth-components/register-form/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './shared/app-layout/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
    
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "book",
        loadChildren: () => import('./book/book.module').then( book => book.BookModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then( blog => blog.BlogModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        loadChildren: () => import('./user/user.module').then(profile => profile.UserModule),
        canActivate: [AuthGuard],
        
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
