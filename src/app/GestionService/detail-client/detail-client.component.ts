import { Component } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent {
  constructor(private s:ServiceService ,private ac:ActivatedRoute,private router:Router) {
  }
  service:any
  ngOnInit(): void {
    this.s.getservicebyid(this.ac.snapshot.params['id']).subscribe(r=>{this.service=r})

  }
  addRevervation(id:any){
    this.s.addReservation(id).subscribe(
      ()=>{
        this.router.navigate(['serviceclient'])
        console.log()
      }


    )
  }

}
