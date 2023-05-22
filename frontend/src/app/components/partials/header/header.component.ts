import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  user!:User;
  constructor(userService:UserService){
    userService.userObservable.subscribe((newUser) =>{
      this.user = newUser;
    })
  }

  ngOnInit(): void {

  }
}
