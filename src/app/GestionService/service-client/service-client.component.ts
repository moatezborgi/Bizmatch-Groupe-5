import { Component } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-service-client',
  templateUrl: './service-client.component.html',
  styleUrls: ['./service-client.component.css']
})
export class ServiceClientComponent {
  constructor(private s:ServiceService,private ac:ActivatedRoute,private router:Router) {
  }
  service:any
  ngOnInit(): void {
    this.s.getAllService().subscribe(r=>{this.service=r})
  }

}
