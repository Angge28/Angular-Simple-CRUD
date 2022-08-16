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

  setBlog = (blogD: Blog) => {
    this.blog.push(blogD)
  }

  editBlog = (blogD: Blog) => {
   for(let data of this.blog) {
    if(data.id === blogD.id){
      data.title = blogD.title
      data.author = blogD.author
      data.description = blogD.description
      data.comments = blogD.comments
    }
   }

   console.log(this.blog)   
   
  }

  delete(id: number){
    this.blog = this.blog.filter((x)=> x.id !== id)
  }
  deleteAll = () => {
    this.blog = [];
    console.log(this.blog)
  }
}
