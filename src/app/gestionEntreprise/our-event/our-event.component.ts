import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-our-event',
  templateUrl: './our-event.component.html',
  styleUrls: ['./our-event.component.css']
})
export class OurEventComponent implements OnInit{
constructor(private s:EventService,private ac:ActivatedRoute,private router:Router) {
}
  evenement:any

ngOnInit(): void {

  this.s.getAllEvenement().subscribe(r=>{this.evenement=r})




}






}
