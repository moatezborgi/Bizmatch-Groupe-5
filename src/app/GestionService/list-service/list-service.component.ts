import { Component } from '@angular/core';
import {EventService} from "../../gestionEntreprise/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent {
  constructor(private s:ServiceService ,private ac:ActivatedRoute,private router:Router) {
  }
  Revervation:any
  ngOnInit(): void {

    this.s.getReservationbyservice(this.ac.snapshot.params['id']).subscribe(r=>{this.Revervation=r})
  }

}
