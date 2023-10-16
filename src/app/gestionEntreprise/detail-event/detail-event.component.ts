import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit{
  constructor(private s:EventService ,private ac:ActivatedRoute,private router:Router) {
  }
  evenement:any
  date_now = new Date()
  ngOnInit(): void {
    this.s.getEventbyid(this.ac.snapshot.params['id']).subscribe(r=>{this.evenement=r})


  }

}
