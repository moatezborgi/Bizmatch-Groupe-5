import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ActivatedRoute, Router } from "@angular/router";
import { PartServiceService } from "../Services/part-service.service";
import {ChiffreAffaire} from "../Models/ChiffreAffaire";
import {Objectif} from "../Models/Objectif";

@Component({
  selector: 'app-entreprise-details',
  templateUrl: './entreprise-details.component.html',
  styleUrls: ['./entreprise-details.component.css']
})
export class EntrepriseDetailsComponent implements OnInit {
  options_spline: any;
  chart_area_spline: any;
  id: any;
  CA: ChiffreAffaire | null = null;
  OB: Objectif | null = null;
  currentObjectif!: number;

  constructor(private route: ActivatedRoute, private router: Router, private service: PartServiceService) {
    this.options_spline = {
      // Your chart options here
    };
  }

  ngOnInit() {
    this.chart_area_spline = new ApexCharts(
      document.querySelector("#chart-area-spline"),
      this.options_spline
    );

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    // Retrieve ChiffreAffaire data
    this.service.getChiffresAffairesByCompany(this.id).subscribe(
      (data) => {
        this.CA = data.body;
        console.log(this.CA);

        // Initialize the chart once the CA data is available
        this.initializeChart();
      },
      (error) => {
        console.error('Error fetching CA:', error);
      });

    // Retrieve Objectif data
    this.service.getObjectifsByCompany(this.id).subscribe(
      (data) => {
        this.OB = data.body;
        console.log(this.OB);

        // Update the currentObjectif once the OB data is available
        this.currentObjectif = this.OB!.o2023;
        },
      (error) => {
        console.error('Error fetching OB:', error);
      });
  }

  initializeChart() {
    // Check if both CA and OB data are available before initializing the chart
    if (this.CA && this.OB) {
      this.options_spline.series = [
        {
          name: "Chiffres Affaires",
          data: [this.CA.c2018, this.CA.c2019, this.CA.c2020, this.CA.c2021, this.CA.c2022],
        },
        {
          name: "Objectifs",
          data: [this.OB.o2018, this.OB.o2019, this.OB.o2020, this.OB.o2021, this.OB.o2022],
        }
      ];

      this.chart_area_spline.updateOptions(this.options_spline);
      this.chart_area_spline.render();
    }
  }

  redirectToContrat() {
    // Navigate to the "/contrat" route and pass the "id" property as a query parameter
    this.router.navigate(['/contrat'], { queryParams: { id: this.id } });
  }
}
