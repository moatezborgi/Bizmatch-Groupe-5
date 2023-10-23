import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/UserServices/auth.service";
import {HttpResponse} from "@angular/common/http";
import {AuthentificationRequest} from "../../Models/UserModels/AuthentificationRequest";
import Swal from "sweetalert2";
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  submitted = false;

  constructor( private formBuilder: FormBuilder, private router: Router,private authService:AuthService,private miseenrelation:MiseenrelationService) {
  }

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  get f() {
    return this.loginForm.controls;
  }

  submitForm(form: any): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const authAttempt = new AuthentificationRequest(form.email, form.password);
    console.log(authAttempt);
    this.authService.login(authAttempt).subscribe({
      next: (response: HttpResponse<any>) => {
         if (response.status === 200) {
          const token = response.body.token;
            localStorage.setItem('token', token);
           localStorage.setItem('emailadress', response.body.emailAddress);
           localStorage.setItem('fname', response.body.fname);
           localStorage.setItem('lname', response.body.lname);
           localStorage.setItem('phone', response.body.phoneNumber);
           localStorage.setItem('userId', response.body.userId);
           localStorage.setItem('userType', response.body.userType);
          if(response.body.userType=="Représentant entreprise")
          {
            this.router.navigate(['/HomeEntreprise']);

          }
        }
      },
      error: (error) => {

        const errorMessage = error.toString();

        console.log(error);
        Swal.fire({
          title: 'Oops?',
          text: "Une erreur est survenue veuillez réessayer ultérieurement",
          icon: 'error',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
      },
      complete: () => {
       this.getcompanytolocalstorage()


        console.info('complete');
      }
    });
  }
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  getcompanytolocalstorage()
  {
const userId=localStorage.getItem('userId');
    this.miseenrelation.getCompany(userId).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
           localStorage.setItem('idCompany', response.body.idCompany);


        }
      },
      error: (error) => {

        const errorMessage = error.toString();

        console.log(error);
        Swal.fire({
          title: 'Oops?',
          text: "Une erreur est survenue veuillez réessayer ultérieurement",
          icon: 'error',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
      },
      complete: () => {


        console.info('complete');
      }
    });
  }
}
