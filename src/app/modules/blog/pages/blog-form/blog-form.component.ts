import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogServiceService } from '../../services/blog-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogItems: Blog[] = []
  blogFormGroup: FormGroup
  commentsFormArray: FormArray
  parameterId: any
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute,  private blogService: BlogServiceService) { 
    
    this.parameterId = this.route.snapshot.paramMap.get('id')
    if(this.parameterId === 'false'){
      this.blogItems = [
        { id: 0,
          title: '', 
          description: '', 
          author: '', 
          comments: ['']
        }]
    }else {
      this.blogItems = this.blogService.getBlog().filter(x => x.id === parseInt(this.parameterId))
    }
    this.blogFormGroup = this.fb.group({
      id: [this.blogItems[0].id], 
      title: [this.blogItems[0].title],
      description: [this.blogItems[0].description],
      author: [this.blogItems[0].author],
      comments: this.fb.array([])
    })

    this.commentsFormArray = this.blogFormGroup.get('comments') as FormArray;
    this.blogFormGroup.valueChanges.subscribe(console.log);

    for(let x of this.blogItems[0].comments){
      this.commentsFormArray.push(new FormControl(x))
    }
  }

  ngOnInit(): void {
  }

  addComments = () => {
    this.commentsFormArray.push(new FormControl(''));
  }

  saveInfo = () => {
    const blogData = this.blogFormGroup.getRawValue() as Blog
    if(this.parameterId === 'false'){
      return this.blogService.setBook(blogData)
    }
    return this.blogService.editBook(blogData)
  }

  deleteComment = (i: number) => {
    this.commentsFormArray.removeAt(i)
  }

}
