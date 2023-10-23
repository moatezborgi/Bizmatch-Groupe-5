import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit{
  constructor(private s:EventService,private ac:ActivatedRoute,private router:Router) {}

    ngOnInit(): void {
    this.s.Delete_event(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['ourevent']))
  }

}
