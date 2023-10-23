import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {UserAddDto} from "./Models/UserModels/UserAddDto";
import {User} from "./Models/UserModels/User";
import {WebSocketServiceService} from "./Services/web-socket-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BizMatch';
  constructor(private router: Router,private webSocketService: WebSocketServiceService) {

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
     this.webSocketService.connect().subscribe(message => {
       let receive = JSON.parse(JSON.stringify(message));
       if (receive.type == 'alert') {
         console.log(receive.message+receive.form)
       }
     });

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
