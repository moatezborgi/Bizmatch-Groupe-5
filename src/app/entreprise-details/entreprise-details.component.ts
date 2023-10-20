import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-entreprise-details',
  templateUrl: './entreprise-details.component.html',
  styleUrls: ['./entreprise-details.component.css']
})
export class EntrepriseDetailsComponent implements OnInit {
  options_spline: any;
  chart_area_spline: any;

  constructor() {
    this.options_spline = {
      series: [
        {
          name: "series2",
          data: [11, 32, 45, 32, 34],
        },
      ],
      chart: {
        fontFamily: "Plus Jakarta Sans', sans-serif",
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      colors: ["#615dff", "#3dd9eb"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "string",
        categories: ["2018", "2019", "2020", "2021", "2022"], // Update x-axis categories
        labels: {
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
      },
      yaxis: {
        min: 0,   // Set the minimum value for the y-axis
        max: 250, // Set the maximum value for the y-axis
        labels: {
          style: {
            colors: [
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
              "#a1aab2",
            ],
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
        theme: "dark",
      },
      legend: {
        labels: {
          colors: ["#a1aab2"],
        },
      },
    };

  }

  ngOnInit() {
    this.chart_area_spline = new ApexCharts(
      document.querySelector("#chart-area-spline"),
      this.options_spline
    );
    this.chart_area_spline.render();
  }
}
