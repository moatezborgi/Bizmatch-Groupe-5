import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{
  constructor(private s:EventService,private router:Router) { }
  ngOnInit(): void {
  }
  addEvnet(f:any){
    this.s.addEvent(f).subscribe(
      ()=>{
        this.router.navigate(['ourevent'])
        console.log(f)
      }


    )
  }
}
