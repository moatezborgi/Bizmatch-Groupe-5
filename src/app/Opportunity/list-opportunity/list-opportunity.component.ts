import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-opportunity',
  templateUrl: './list-opportunity.component.html',
  styleUrls: ['./list-opportunity.component.css']
})
export class ListOpportunityComponent implements OnInit {

  constructor(private aRoute:ActivatedRoute,
              private route:Router) { }

  ngOnInit(): void {
  }
  username: any;

  addev(){
    Swal.fire({
      title: 'Are you sure want to Delete this opportunity?',
      text: 'You will not be able to recover this opportunity!',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      confirmButtonColor:'blue',
    }).then(async (result) => {
      if (result.value) {
        this.route.navigate(['listopportunity'])

        //delete Event confirmation
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.route.navigate(['AddHoliday/'+this.username])

      }
    })
  }

}
