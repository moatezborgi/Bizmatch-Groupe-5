import { Component } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.css']
})
export class DeleteReservationComponent {
  constructor(private s:ServiceService,private ac:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.s.Delete_reservation(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['ourservice']))
  }

}
