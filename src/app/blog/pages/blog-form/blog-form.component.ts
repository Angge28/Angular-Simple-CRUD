import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit, OnDestroy {

  updatedBlogs: Subscription | undefined
  blogItems: Blog[] = []
  blogId: any
  blogFormGroup: FormGroup
  commentsFormArray: FormArray
  private router: Router | undefined;
  
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute,  private blogService: BlogServiceService) { 
    this.route.paramMap.subscribe( paramMap => {
      this.blogId = paramMap.get("id");
    })

    this.blogFormGroup = this.fb.group({
      id: [],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([])
    });
   this.commentsFormArray = this.blogFormGroup.get('comments') as FormArray
   
    this.updatedBlogs = this.blogService.getEditBlogs(parseInt(this.blogId)).subscribe(data => {
      this.blogFormGroup = this.fb.group({
        id: [data[0].id],
        title: [data[0].title],
        description: [data[0].description],
        author: [data[0].author],
        comments: this.fb.array([])
      });
      this.commentsFormArray = this.blogFormGroup.get('comments') as FormArray
      for(let commentsData of data[0].comments){
        this.commentsFormArray.push(new FormControl(commentsData))
      }    
    }) 
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.updatedBlogs!.unsubscribe()
  }

  addComment = () => {
    this.commentsFormArray.push(new FormControl(''));
  }

  saveInfo = () => {
    const blogD = this.blogFormGroup.getRawValue() as Blog
    // if(this.parameterId === 'false'){
    //   return this.blogService.setBlogs(blogD)
    // }
    // return this.blogService.editBlogs(blogD)
    if(this.blogId && blogD.id !== null)
       this.blogService.editBlogs(blogD).subscribe()
    else
       this.blogService.setBlogs(blogD).subscribe() 

    this.router?.navigate(['/blogs'])
  }

  deleteComment = (index: number) => {
    this.commentsFormArray.removeAt(index)
  }
}
