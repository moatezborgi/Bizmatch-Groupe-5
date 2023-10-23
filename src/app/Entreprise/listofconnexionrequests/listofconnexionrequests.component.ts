import {Component, OnInit} from '@angular/core';
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";
import {MatDialog} from "@angular/material/dialog";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {RelationDTO} from "../../Models/MiseEnRelation/RelationDTO";

@Component({
  selector: 'app-listofconnexionrequests',
  templateUrl: './listofconnexionrequests.component.html',
  styleUrls: ['./listofconnexionrequests.component.css']
})
export class ListofconnexionrequestsComponent implements OnInit{
  constructor(private miseenrelationservice:MiseenrelationService) {
  }

  relationRequestList!:RelationDTO[];
  relationRequestListreceive!:RelationDTO[];
  relationRequestListAccepted!:RelationDTO[];

  demandeurid:any=localStorage.getItem('idCompany');

  ngOnInit(): void {
    this.getlistofrequest()
    this.getlistofrequestreceive()
    this.getDemandeofCompanyAccepted()

  }

  getlistofrequest()
  {
    this.miseenrelationservice.getDemandeofCompany(this.demandeurid).subscribe({
      next: (response: HttpResponse<any>) => {

          this.relationRequestList=response.body
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
  getlistofrequestreceive()
  {
    this.miseenrelationservice.getDemandereceivedofCompany(this.demandeurid).subscribe({
      next: (response: HttpResponse<any>) => {

        this.relationRequestListreceive=response.body
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
  getDemandeofCompanyAccepted()
  {
    this.miseenrelationservice.getDemandeofCompanyAccepted(this.demandeurid).subscribe({
      next: (response: HttpResponse<any>) => {
        this.relationRequestListAccepted=response.body
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

  acceptrelationRequest(iddemande:string)
  {
    this.miseenrelationservice.acceptrelationRequest(iddemande).subscribe({
      next: (response: HttpResponse<any>) => {
        Swal.fire({
          title: 'success',
          text: "La demande est acceptée",
          icon: 'success',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
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
  refuserdemande(iddemande:string)
  {
    this.miseenrelationservice.RefuserelationRequest(iddemande).subscribe({
      next: (response: HttpResponse<any>) => {
        Swal.fire({
          title: 'Refuser',
          text: "La demande est refusée",
          icon: 'error',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
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
