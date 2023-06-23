import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit{

  constructor(private users: UsersService) { }

  

  ngOnInit(): void {
  }


}
