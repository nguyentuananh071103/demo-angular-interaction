import { Component, OnInit } from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userClicked?: IUser;
  users: IUser[] = [
    {
      id: 1,
      name: "hiep",
      email: "hiep@gmail.com",
      phone: "0303822773",
      address: "HN"
    },
    {
      id: 2,
      name: "anh",
      email: "anh@gmail.com",
      phone: "0303822773",
      address: "HN"
    },
    {
      id: 3,
      name: "ha",
      email: "ha@gmail.com",
      phone: "0303822773",
      address: "HN"
    }
    ];

  userFilter: IUser[] = []
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }


  clickUser(id: number){
   let user = this.users.filter(user => {
      return user.id === id
    });

   this.userClicked = user[0];
  }

  search(event: any){
    let name = event;
    this.userFilter = (name) ? this.getUserByName(name) : this.users
  }

  getUserByName(name: string){
    return this.users.filter(user => {
      return user.name == name
    })
  }

}
