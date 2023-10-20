import {Component, OnInit} from '@angular/core';
import {EventService} from "../../gestionEntreprise/event.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-delete-service',
  templateUrl: './delete-service.component.html',
  styleUrls: ['./delete-service.component.css']
})
export class DeleteServiceComponent implements OnInit{
  constructor(private s:ServiceService,private ac:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.s.Delete_service(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['ourservice']))
  }

}
