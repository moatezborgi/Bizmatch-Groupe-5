import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-main-shared-componenet',
  templateUrl: './main-shared-componenet.component.html',
  styleUrls: ['./main-shared-componenet.component.css']
})
export class MainSharedComponenetComponent implements OnInit{

  @Input() @Output() user:any;

  ngOnInit(): void {

   }

}
