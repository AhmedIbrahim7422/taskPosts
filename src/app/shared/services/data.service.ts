import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../intrface/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  posts: any;
  newPosts: Array<IPost> = []


  updateposts(){
    localStorage.setItem('newPosts', JSON.stringify(this.newPosts));

  }
  
  getposts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


// this just for write it will not post or send any data to the server 
  postData(addPost: any){
    return this.http.post('https://reqres.in/api/users', addPost);
  }

}
