import {Component, OnInit} from '@angular/core';
import {BesoinService} from "../../../Service/IdentificationBesoin/besoin.service";

@Component({
  selector: 'app-liste-des-besoin',
  templateUrl: './liste-des-besoin.component.html',
  styleUrls: ['./liste-des-besoin.component.css']
})
export class ListeDesBesoinComponent implements OnInit{
   listeBesoin: any;
      ngOnInit(): void {
    this.besoinService.afficherToutBesoinParEntreprise().subscribe(
      (data:any)=>{
        this.listeBesoin=data;
        console.log("garbage")

      })
  }
  constructor(private besoinService:BesoinService) {
  }

}
