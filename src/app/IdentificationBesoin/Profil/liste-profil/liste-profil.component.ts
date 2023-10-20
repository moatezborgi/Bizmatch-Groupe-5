import {Component, OnInit} from '@angular/core';
import {ProfilService} from "../../../Service/IdentificationBesoin/profil.service";

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.css']
})
export class ListeProfilComponent implements OnInit{
  listeProfil: any;


  ngOnInit(): void {
    this.profilService.afficherToutProfilParEntreprise().subscribe(
      (data:any)=>{
        this.listeProfil=data;
        console.log("garbage")

      })
  }
  constructor(private profilService:ProfilService) {

  }

}
