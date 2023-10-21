import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserAddDto} from "./Models/UserModels/UserAddDto";
import {User} from "./Models/UserModels/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BizMatch';
  constructor(private router: Router) {

  }
  user:any;

  emailadress:any;
  fname:any;
  lname:any;
  phone:any;
  userId:any;
  userType:any;
  ngOnInit(): void {
    this.emailadress=localStorage.getItem('emailadress')
     this.fname=localStorage.getItem('fname');
   this.lname= localStorage.getItem('lname');
   this.phone= localStorage.getItem('phone');
  this.userId=  localStorage.getItem('userId');
   this.userType= localStorage.getItem('userType');

    this.user=new User(this.userId,  this.emailadress,this.fname,this.lname,this.userType,this.phone)
console.log(this.user);
    this.isLoginPage();
  }
  isLoginPage() {
    if(this.router.url === '/Connect')
    {
      return true

    }
    return false;
  }
  isSignUpPage() {
    if(this.router.url === '/CreateAccount')
    {
      return true

    }
    return false;
  }
}
