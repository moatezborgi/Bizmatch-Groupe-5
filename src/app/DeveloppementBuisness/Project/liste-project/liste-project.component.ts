import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../../Services/DeveloppementBuisness/project.service";

@Component({
  selector: 'app-liste-project',
  templateUrl: './liste-project.component.html',
  styleUrls: ['./liste-project.component.css']
})
export class ListeProjectComponent  implements OnInit{
  listeProjet: any;
  itemsPerPage = 10;
  currentPage = 1;

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
