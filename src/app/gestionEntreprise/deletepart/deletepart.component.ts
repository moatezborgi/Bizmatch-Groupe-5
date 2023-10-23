import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-deletepart',
  templateUrl: './deletepart.component.html',
  styleUrls: ['./deletepart.component.css']
})
export class DeletepartComponent implements OnInit{

  constructor(private s:EventService,private ac:ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    this.s.Delete_part(this.ac.snapshot.params['id']).subscribe(
      ()=>
        this.router.navigate(['ourevent'])
    )
  }


}
