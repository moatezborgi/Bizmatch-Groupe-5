import {Component, Input, OnInit} from '@angular/core';
import {Company} from "../../Models/MiseEnRelation/Company";
import {User} from "../../Models/UserModels/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input()user!:User;
  ngOnInit(): void {

  }

}
