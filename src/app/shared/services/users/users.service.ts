import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  users = [
    {
      username: "admin",
      password: "12345"
    },
  ]

  usersStorage = localStorage.getItem('users')?  JSON.parse(localStorage.getItem("users")!) : []
  login : boolean | undefined

}
