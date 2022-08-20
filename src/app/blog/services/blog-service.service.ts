import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
 
  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.url}/blog`).pipe(tap((b: Blog[]) => {
        return b;
      })
    );
  }

  //read blogs
  setBlogs = (b: Blog) => {
    return this.http.post<Blog>(`${environment.url}/blog`, b).pipe(
      tap( b => b))
  }


  editBlogs = (blogData: Blog) => {
    return this.http.put<Blog>(`${environment.url}/blog/${blogData.id}`, blogData).pipe(
      tap(b => b)
    )
  }

  //update blog
  getEditBlogs = (id: number) => {
    return this.http.get<Blog[]>(`${environment.url}/blogs`).pipe(
      map((blog: Blog[]) => {
        return blog.filter(b => b.id === id)      
      })
    )
  }

  delete =(id: number) => {
    return this.http.delete<Blog>(`${environment.url}/blog/${id}`).pipe(
      tap(b => b)
    )
  }
  //  for(let data of this.blog) {
  //   if(data.id === blogD.id){
  //     data.title = blogD.title
  //     data.author = blogD.author
  //     data.description = blogD.description
  //     data.comments = blogD.comments
  //   }
  //  }

  // console.log(this.blog)   
   
  deleteAll = () => {
    this.http.delete<Blog>(`${environment.url}/blogs/`).pipe(tap(b => b))
  }
}

