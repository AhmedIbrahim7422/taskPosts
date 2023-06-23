import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  addPost : FormGroup;
  constructor(public service: DataService, private formBuilder: FormBuilder, private router: Router) { 
    this.addPost = formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required, Validators.minLength(300)]
    })
    console.log(this.addPost)
  }



  ngOnInit(): void {
  }

newpost(){
  // this.service.postData(this.addPost).subscribe(() =>{
    console.log(this.service.newPosts)
    this.service.newPosts.unshift(this.addPost.value)
    this.updatePosts()
    this.router.navigate(['']);
  
}

updatePosts(){
  localStorage.setItem('newPosts', JSON.stringify(this.service.newPosts))
}

}
