import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor() { }

  blog: Blog[] = [
    {
      id: 1,
      title: "Blog_1",
      description: "Blog_Test",
      author: "Blog_Author",
      comments: [
        "Blog_Comments",
        "Blog_Comments"
      ]
    },
    {
      id: 2,
      title: "Blog_2",
      description: "Blog_Test",
      author: "Blog_Author",
      comments: [
        "Blog_Comments",
        "Blog_Comments"
      ]
    },
    {
      id: 3,
      title: "Blog_3",
      description: "Blog_Test",
      author: "Blog_Author",
      comments: [
        "Blog_Comments",
        "Blog_Comments"
      ]
    }
  ]

  getBlog = () => {
    return this.blog;
  }
  setBook = (blogD: Blog) => {
    this.blog.push(blogD)
  }

  editBook = (blogD: Blog) => {
   for(let data in this.blog) {
    if(this.blog[data].id === blogD.id){
      this.blog[data] = blogD
    }
   }
  }

  delete(id: number){
    this.blog = this.blog.filter((data)=> data.id !== id)
  }
  
  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}

