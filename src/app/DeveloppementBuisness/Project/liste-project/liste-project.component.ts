import {Component, OnInit} from '@angular/core';
import {OpportunityService} from "../../../Service/DeveloppementBuisness/opportunity.service";
import {ProjectService} from "../../../Service/DeveloppementBuisness/project.service";

@Component({
  selector: 'app-liste-project',
  templateUrl: './liste-project.component.html',
  styleUrls: ['./liste-project.component.css']
})
export class ListeProjectComponent  implements OnInit{
  listeProjet: any;

  ngOnInit(): void {
    this.projetService.afficherToutProjectParEntreprise().subscribe(
      (data:any)=>{
        this.listeProjet=data;
        console.log("garbage")

      })
  }
  constructor(private projetService:ProjectService) {
  }
}