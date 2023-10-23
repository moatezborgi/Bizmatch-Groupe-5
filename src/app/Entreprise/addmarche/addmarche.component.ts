import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";
import {Marche} from "../../Models/MiseEnRelation/Marche";
import {DecouvertemarcheServiceService} from "../../Services/MiseEnrelationService/decouvertemarche-service.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-addmarche',
  templateUrl: './addmarche.component.html',
  styleUrls: ['./addmarche.component.css']
})
export class AddmarcheComponent {
  constructor(private formBuilder: FormBuilder,private marcheservice:DecouvertemarcheServiceService)
  {


  }
  companyId:any=localStorage.getItem("idCompany");

  submitted = false;

  addForm = new FormGroup({
    descMarche: new FormControl(null, Validators.required),
    secteur: new FormControl(null, Validators.required),
    rentabilite: new FormControl(null, [Validators.required]),
    tailledemarche: new FormControl(null, Validators.required),
    duree: new FormControl(null, Validators.required),
    datelancement: new FormControl(null, Validators.required)

  });
  get f() {
    return this.addForm.controls;
  }
  submitForm(form: any): void {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }


    const marche=new Marche("",form.descMarche,form.secteur,form.rentabilite,form.tailledemarche,form.duree,form.datelancement,this.companyId,false)
    this.marcheservice.addmarche(marche).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          //  const token = response.body.token;
          Swal.fire({
            title: 'Ajout effectué',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          })
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
          showConfirmButton: false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
      },
      complete: () => {


        console.info('complete');
      }
    });  }
}
