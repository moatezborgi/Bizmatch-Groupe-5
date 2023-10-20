import {Component, OnInit} from '@angular/core';
import {EventService} from "../../gestionEntreprise/event.service";
import {Router} from "@angular/router";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit{
  constructor(private s:ServiceService,private router:Router) { }
  ngOnInit(): void {
  }
  addService(f:any){
    this.s.addService(f).subscribe(
      ()=>{
        this.router.navigate(['ourservice'])
        console.log(f)
      }
    )
  }


}
