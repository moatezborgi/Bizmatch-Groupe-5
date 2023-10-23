import {Component, OnInit} from '@angular/core';
import {OpportunityService} from "../../../Services/DeveloppementBuisness/opportunity.service";

@Component({
  selector: 'app-listeopportunity',
  templateUrl: './listeopportunity.component.html',
  styleUrls: ['./listeopportunity.component.css']
})
export class ListeopportunityComponent implements OnInit{
  listeOpportunity: any;
  itemsPerPage = 10;
  currentPage = 1;
  ngOnInit(): void {
    this.opportunityService.afficherToutOpportunityParEntreprise().subscribe(
      (data:any)=>{
        this.listeOpportunity=data;
        console.log("garbage")

      })
  }
  constructor(private opportunityService:OpportunityService) {
  }

}
