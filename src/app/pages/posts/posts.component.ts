import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { get } from 'http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/shared/intrface/post';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  constructor(public service: DataService, private http: HttpClient) { }
  p= ""
  posts: any;
  newPost = this.service.newPosts
  ngOnInit(): void {
    // this.posts = this.service.posts
    this.getposts()
  }


  getposts() {
      this.service.getposts().subscribe(
      (res) =>{
        this.posts = res
      }
    )
  }


}
