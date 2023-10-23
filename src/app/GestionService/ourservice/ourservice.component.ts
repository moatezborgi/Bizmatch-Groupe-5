import {Component, OnInit} from '@angular/core';
import {EventService} from "../../gestionEntreprise/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css']
})
export class OurserviceComponent implements OnInit{
  constructor(private s:ServiceService,private ac:ActivatedRoute,private router:Router) {
  }
  service:any
  ngOnInit(): void {
    this.s.getAllService().subscribe(r=>{this.service=r})
  }

}
