import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PartServiceService} from "../Services/part-service.service";

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent implements OnInit{
  id: any;
  constructor(private route: ActivatedRoute,private service:PartServiceService) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Check if the 'id' query parameter exists in the URL
      if (params['id']) {
        // Use the 'id' value as needed
         this.id = params['id'];
        console.log('Received id:', this.id);

        // You can now use the 'id' value in your component
      }
    });
  }
  addContrat(){

  }
}
