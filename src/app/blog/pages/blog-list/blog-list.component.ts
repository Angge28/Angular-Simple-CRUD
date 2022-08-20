import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map, Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  subsBlog: Subscription | undefined
  blogs: Blog[] = []
  blogId: Blog | undefined;
  private router: Router | undefined;

  constructor(private blogService: BlogServiceService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data
    });
    //console.log(this.blogs)
  }

  ngOnDestroy(): void {
    this.subsBlog?.unsubscribe()
  }
  // action(data: object){
  //   console.log(data)
  // }
  // action(id: number){
  //   this.blogService.delete(id)
  //   this.blogs = this.blogService.getBlogs();
  // }

  // deleteAllBlog = () => {
  //   this.blogService.deleteAll()
  //   this.blogs = this.blogService.getBlogs();
  // }
  deleteAction(id: number){
    this.subsBlog = forkJoin([this.blogService.delete(id), this.blogService.getBlogs()]).pipe(
    map(([a , b]) => {
      this.blogs = b
    })).subscribe()
    this.router!.navigate(['/blog']);
  }

  deleteAllBlog = () => {
    for(let data of this.blogs) {
      this.deleteAction(data.id)
    }
  }
}
