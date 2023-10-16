import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detailevntclient',
  templateUrl: './detailevntclient.component.html',
  styleUrls: ['./detailevntclient.component.css']
})
export class DetailevntclientComponent implements OnInit{
  constructor(private s:EventService ,private ac:ActivatedRoute,private router:Router) {
  }
  evenement:any
  ngOnInit(): void {
    this.s.getEventbyid(this.ac.snapshot.params['id']).subscribe(r=>{this.evenement=r})

  }
  addParticipation(id:any){
    this.s.addParticipation(id).subscribe(
      ()=>{
        this.router.navigate(['eventclient'])
        console.log()
      }


    )
  }

}
