import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DecouvertemarcheServiceService} from "../../Services/MiseEnrelationService/decouvertemarche-service.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listmarche',
  templateUrl: './listmarche.component.html',
  styleUrls: ['./listmarche.component.css']
})
export class ListmarcheComponent implements OnInit{
  constructor(private formBuilder: FormBuilder,private marcheservice:DecouvertemarcheServiceService)
  {


  }
  companyId:any=localStorage.getItem("idCompany");
marcheList!:any[];
  ngOnInit(): void {
    this.grtallmarchedecompany();

  }


  grtallmarchedecompany()
  {
    this.marcheservice.getMarchListbyCompany(this.companyId).subscribe({
      next: (response: HttpResponse<any>) => {
        this.marcheList=response.body
      }, error: (error) => {
        const errorMessage = error.toString();

        console.info(errorMessage);

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


      }
    });

  }

}
