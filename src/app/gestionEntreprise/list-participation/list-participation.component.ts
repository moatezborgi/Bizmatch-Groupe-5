import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-participation',
  templateUrl: './list-participation.component.html',
  styleUrls: ['./list-participation.component.css']
})
export class ListParticipationComponent implements OnInit{
  constructor(private s:EventService ,private ac:ActivatedRoute,private router:Router) {
  }
  part:any
  ngOnInit(): void {

    this.s.getpartbyevent(this.ac.snapshot.params['id']).subscribe(r=>{this.part=r})
  }

}
