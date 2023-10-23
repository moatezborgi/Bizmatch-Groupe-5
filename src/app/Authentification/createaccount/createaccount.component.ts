import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../Services/UserServices/auth.service";
import {UserAddDto} from "../../Models/UserModels/UserAddDto";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  submitted = false;
  typeUser!:string;

  constructor( private formBuilder: FormBuilder, private router: Router,private authService:AuthService) {
  }

  loginForm = new FormGroup({
    lname: new FormControl(null, Validators.required),
    fname: new FormControl(null, Validators.required),
    emailAdresse: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
    userType: new FormControl(null, Validators.required),
    phoneNumber: new FormControl(null, Validators.required)

  });

  get f() {
    return this.loginForm.controls;
  }

  submitForm(form: any): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    switch (form.userType) {
      case "1":
         this.typeUser="Représentant entreprise"
        break
      case "2":
        this.typeUser="Investisseur"

        break
      case "3":
        this.typeUser="Collaborateur externe"

        break
      case "4":
        this.typeUser="Entrepreneur"

        break
    }
     const authAttempt = new UserAddDto(form.emailAdresse, form.password,form.fname,form.lname,this.typeUser,form.phoneNumber);
    console.log(authAttempt);
    this.authService.addUser(authAttempt).subscribe({
      next: (response: HttpResponse<any>) => {
         if (response.status === 200) {
          //  const token = response.body.token;
          Swal.fire({
            title: 'Compte crée',
            text: "Activer votre compte via le lien envoyé par mail ",
            icon: 'success',
            showCancelButton: false,
            showConfirmButton:false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          })        }
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
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
