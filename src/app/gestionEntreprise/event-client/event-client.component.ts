import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";

@Component({
  selector: 'app-event-client',
  templateUrl: './event-client.component.html',
  styleUrls: ['./event-client.component.css']
})
export class EventClientComponent implements OnInit{
  constructor(private s:EventService) {
  }
  evenement:any

  ngOnInit(): void {
    this.s.getAllEvenement().subscribe(r=>{this.evenement=r})

  }

}
