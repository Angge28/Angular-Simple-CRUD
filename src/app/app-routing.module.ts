import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "blog",
    pathMatch: "full"
  },
  {
    path: "book",
    loadChildren: () => import('./modules/book/book.module').then( book => book.BookModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then( blog => blog.BlogModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/user/user.module').then(user => user.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
