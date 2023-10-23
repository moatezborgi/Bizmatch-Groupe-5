import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {DecouvertemarcheServiceService} from "../../Services/MiseEnrelationService/decouvertemarche-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-popupcompany',
  templateUrl: './popupcompany.component.html',
  styleUrls: ['./popupcompany.component.css']
})
export class PopupcompanyComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public company: any,private router: Router, private ref: MatDialogRef<PopupcompanyComponent>,private misenrelation:MiseenrelationService,private marcheservice:DecouvertemarcheServiceService) {
  }
  ngOnInit(): void {
    this.grtallmarchedecompany()
  }

  demandeurid:any=localStorage.getItem('idCompany');
  marcheList!:any[];
  seconnecter()
  {
    this.misenrelation.addRelationRequest(this.demandeurid,this.company.idCompany).subscribe({
      next: (response: HttpResponse<any>) => {
        Swal.fire({
          title: 'success',
          text: "Votre demande à été envoyée à "+this.company.companyLegalName,
          icon: 'success',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
          alert(response.status)
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
  grtallmarchedecompany()
  {
    this.marcheservice.getMarchListbyCompanynonclot(this.company.idCompany).subscribe({
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
  Signer()
    {

      this.router.navigate(['/signature/'+this.company.companyId]);

    }

}
