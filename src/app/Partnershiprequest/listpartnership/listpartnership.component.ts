import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-listpartnership',
  templateUrl: './listpartnership.component.html',
  styleUrls: ['./listpartnership.component.css']
})
export class ListpartnershipComponent implements OnInit {


  constructor(private aRoute:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
  }
  username: any;

  addev(){
    Swal.fire({
      title: 'Are you sure want to Delete this partner?',
      text: 'You will not be able to recover this partner!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor:'blue',
    }).then(async (result) => {
      if (result.value) {
        this.route.navigate(['addreunion'])

        //delete Event confirmation
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.route.navigate(['AddHoliday/'+this.username])

      }
    })
  }
}
