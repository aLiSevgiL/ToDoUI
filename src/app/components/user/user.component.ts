import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  standalone: true,
  imports:[CommonModule,HttpClientModule]
})
export class UserComponent implements OnInit  {
users:User[]=[];

constructor (private userService:UserService){}

ngOnInit(): void {
  this.userService.getUsers().subscribe(data=>{
    this.users = data;
  });
}


}
