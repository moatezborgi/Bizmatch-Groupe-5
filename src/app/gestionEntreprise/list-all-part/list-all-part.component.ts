import {Component, OnInit} from '@angular/core';
import {EventService} from "../event.service";

@Component({
  selector: 'app-list-all-part',
  templateUrl: './list-all-part.component.html',
  styleUrls: ['./list-all-part.component.css']
})
export class ListAllPartComponent implements OnInit {
  constructor(private s:EventService) {
  }

  part: any

  ngOnInit(): void {
    this.s.getAllPart().subscribe(r => {this.part = r})

  }
}
