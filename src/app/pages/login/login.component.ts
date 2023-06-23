import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm: any
  constructor(private users: UsersService, private formBuilder: FormBuilder, private router: Router) { 
    this.loginForm = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }


  failed = false

  ngOnInit(): void {
  }

login(){
  for (let index = 0; index < this.users.users.length; index++) {

    if (this.loginForm.value.username == this.users.users[index].username) {
      if (this.loginForm.value.password == this.users.users[index].password) {
        this.users.login = true
        this.router.navigate(['/landing/new-post'])
      }
    }
  }

  // this for loob in local storge because it is local
  for (let index = 0; index < this.users.usersStorage!.length; index++) {

    if (this.loginForm.value.username && this.loginForm.value.password == this.users.usersStorage[index].username && this.users.usersStorage[index].password) {
        this.users.login = true
        this.router.navigate(['/landing/new-post'])
      
    } else{
      this.failed = true
    }
  }

}

}
