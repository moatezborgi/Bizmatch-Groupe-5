import {Component, OnInit} from '@angular/core';
import {Company} from "../../Models/MiseEnRelation/Company";
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";
import Swal from "sweetalert2";
import {HttpResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {PopupcompanyComponent} from "../popupcompany/popupcompany.component";
declare const google: any;

@Component({
  selector: 'app-maps-company',
  templateUrl: './maps-company.component.html',
  styleUrls: ['./maps-company.component.css']
})
export class MapsCompanyComponent implements  OnInit{
  company!:Company[];
  companyUser!:Company;
  userId:any=localStorage.getItem("userId");
  map: any;
  private isMapScriptLoaded = false; // Flag to track if the Google Maps API script has been loaded
  private isMapInitialized = false; // Add a flag to track map initialization state
  private markers: any[] = []; // Store the markers in an array to keep track of them
   apiKey = '';
  isLoading = false;

  constructor(private miseenrelationservice:MiseenrelationService,private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getCompanyDetails()

  }

  loadmatchedStructure()
  {
    this.miseenrelationservice.getmatchCompany(this.companyUser.domaine).subscribe({
      next: (response: HttpResponse<any>) => {
        this.company=response.body;
console.log(this.company)

      }, error: (error) => {



         const errorMessage = error.toString();

        console.info(errorMessage);

        Swal.fire({
          title: 'Oops?',
          text: "Une erreur est survenue veuillez réessayer ultérieurement",
          icon: 'error',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
      },
      complete: () => {

this.loadMapScript();

      }
    });
  }
  getCompanyDetails()
  {
    this.miseenrelationservice.getCompany(this.userId).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          //  const token = response.body.token;

          this.companyUser=response.body
          console.log(this.companyUser)
        }
      },
      error: (error) => {

        const errorMessage = error.toString();

        console.log(error);
        Swal.fire({
          title: 'Oops?',
          text: "Une erreur est survenue veuillez réessayer ultérieurement",
          icon: 'error',
          showCancelButton: false,
          showConfirmButton:false,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33'
        })
      },
      complete: () => {
        console.info('complete');
        this.loadmatchedStructure()

      }
    });
  }
  loadMapScript(): void {

    if (this.isMapScriptLoaded) {

      // If the script is already loaded, no need to load it again
      this.initMap();
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.isMapScriptLoaded = true;
      this.initMap();
    };
    document.body.appendChild(script);

  }
  clearMarkers(): void {
    // Remove all markers from the map and empty the markers array
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  }

  initMap(): void {
    const tunisiaBounds = {
      north: 37.3871,
      south: 30.2403,
      west: 7.5236,
      east: 11.5984
    };

    const mapOptions = {
      center: { lat: 33.8869, lng: 9.5375 }, // Coordonnées de la Tunisie
      zoom: 7, // Niveau de zoom initial
      fullscreenControl: false, // Add this line to disable fullscreen control
     };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.isMapInitialized = true; // Set the flag to true after the map is initialized

    // Ajoutez vos marqueurs à partir des données de vos structures
    this.addMarkers(this.company);
  }


  addMarkers(filteredStructures: Company[]): void {
    this.clearMarkers();

    filteredStructures.forEach(structure => {
      // Set marker icon based on the type of structure
      let markerIcon!: string;

      // Check if the structure has a valid typeStructure property
         // Set a default marker icon if the structure type is not available

      const marker = new google.maps.Marker({
        position: { lat: parseFloat(structure.latitude), lng: parseFloat(structure.longitude) },
        map: this.map,
        title: structure.companyLegalName

      });
      //Spécifiez la nouvelle taille du marqueur (largeur et hauteur en pixels)
      const nouvelleTaille = new google.maps.Size(30, 30);

      //Mettez à jour l'option scaledSize de l'icône du marqueur
      marker.setIcon({url: markerIcon, scaledSize: nouvelleTaille});
      //Ajoutez un événement de clic pour afficher les détails de la structure
      marker.addListener('click', () => {
        this.dialog.closeAll();
        const dialogRef= this.dialog.open(PopupcompanyComponent, {
          width: '40%',
          height: '70%',
          data:structure,
          panelClass: 'custom-dialog-class',
          position: { left: '30%'}
        });
      });
      this.markers.push(marker); // Add the new marker to the markers array

    });
  }
}
