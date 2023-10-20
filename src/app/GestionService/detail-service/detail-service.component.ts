import { Component } from '@angular/core';
import {EventService} from "../../gestionEntreprise/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.css']
})
export class DetailServiceComponent {
  constructor(private s:ServiceService ,private ac:ActivatedRoute,private router:Router) {
  }
  service:any
  ngOnInit(): void {
    this.s.getservicebyid(this.ac.snapshot.params['id']).subscribe(r=>{this.service=r})


  }

}
