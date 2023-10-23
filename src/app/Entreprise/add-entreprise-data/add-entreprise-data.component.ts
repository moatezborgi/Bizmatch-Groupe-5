import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Company} from "../../Models/MiseEnRelation/Company";
import {MiseenrelationService} from "../../Services/MiseEnrelationService/miseenrelation.service";
import {HttpResponse} from "@angular/common/http";
import Swal from "sweetalert2";
declare const google: any;

@Component({
  selector: 'app-add-entreprise-data',
  templateUrl: './add-entreprise-data.component.html',
  styleUrls: ['./add-entreprise-data.component.css']
})
export class AddEntrepriseDataComponent implements OnInit{
  submitted = false;
  apiKey = '';
  map: any;
  marker!: any;
  adresseStruct:any;
  googleMapsLoaded = false;

  @ViewChild('companyLegalName') searchInput!: ElementRef;
  @ViewChild('adresse') adresse!: ElementRef;

  constructor(private formBuilder: FormBuilder,private miseenrelationservice:MiseenrelationService) {
}
  addForm = new FormGroup({
    companyLegalName: new FormControl(null, Validators.required),
    fiscalNumber: new FormControl(null, Validators.required),
    contactMail: new FormControl(null, [Validators.required]),
    domain: new FormControl(null, Validators.required),
    webSite: new FormControl(null, Validators.required),
    fixContact: new FormControl(null, Validators.required),
    adresse: new FormControl(null),
    chiffreaffairelastyear: new FormControl(null, Validators.required),
    employees: new FormControl(null, Validators.required)


  });
  longitudecomp:any;
  latitudecomp:any;
  userId:any=localStorage.getItem("userId");
  hidebouton!:boolean;
  hideboutonupdate!:boolean;
  companyupdate!:any;

  get f() {
    return this.addForm.controls;
  }


  submitForm(form: any): void {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    }
    if(this.companyupdate!=null)
    {
      const company = new Company(this.companyupdate.idCompany,form.companyLegalName, form.fiscalNumber, this.adresse.nativeElement.value, form.contactMail, this.companyupdate.longitudecomp,this.companyupdate.latitudecomp, form.domain, form.webSite, this.userId, form.fixContact, form.chiffreaffairelastyear, form.employees)

      this.miseenrelationservice.update(company).subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.status === 200) {
            //  const token = response.body.token;
            Swal.fire({
              title: 'Fiche entreprise modifiée',
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33'
            })
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
            showConfirmButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          })
        },
        complete: () => {


          console.info('complete');
        }
      });
    }
    else {
      const company = new Company("",form.companyLegalName, form.fiscalNumber, this.adresse.nativeElement.value, form.contactMail, this.longitudecomp, this.latitudecomp, form.domain, form.webSite, this.userId, form.fixContact, form.chiffreaffairelastyear, form.employees)
      this.miseenrelationservice.addCompany(company).subscribe({
        next: (response: HttpResponse<any>) => {
          if (response.status === 200) {
            //  const token = response.body.token;
            Swal.fire({
              title: 'Fiche entreprise crée',
              icon: 'success',
              showCancelButton: false,
              showConfirmButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33'
            })
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
            showConfirmButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          })
        },
        complete: () => {


          console.info('complete');
        }
      });
    }
  }

  ngOnInit(): void {
    this.getCompanyDetails()

    this.loadMapScript()

  }

  loadMapScript(): void {

    if (this.googleMapsLoaded) {
      this.initMap();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.googleMapsLoaded = true;
      this.initMap();
    };
    document.body.appendChild(script);

  }

  initMap(): void {

    const tunisiaCenter = { lat: parseFloat(this.companyupdate.latitude), lng: parseFloat(this.companyupdate.longitude)}; // Center of Tunisia
    const tunisiaBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(30.2403, 7.5236), // Southwest corner of Tunisia
      new google.maps.LatLng(37.3871, 11.5984) // Northeast corner of Tunisia
    );
    const mapOptions = {
      center: tunisiaCenter, // Coordonnées de la Tunisie
      zoom: 7, // Niveau de zoom initial
      fullscreenControl: true,
      bounds: tunisiaBounds

    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.marker = new google.maps.Marker({
      position: tunisiaCenter, // Set the initial marker position (you can change this to your desired position)
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
    });

    // Listen to the marker's position change event
    this.marker.addListener('dragend', (event: any) => {
      this.onMarkerDragEnd(event);
    });
    // Ajoutez vos marqueurs à partir des données de vos structures
    // Create the search box and link it to the UI element.

    // Bias the SearchBox results towards current map's viewport.



  }
  onMarkerDragEnd(event: any) {
    // When the marker is dragged, update the marker's position
    const newPosition = event.latLng.toJSON();
    this.marker.setPosition(event.latLng);

    // You can access the latitude and longitude of the marker like this:
    const latitude = newPosition.lat;
    const longitude = newPosition.lng;

    // You can also get the address from the latitude and longitude using a Geocoder:
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: event.latLng }, (results: any, status: any) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          const address = results[0].formatted_address;
           console.info(latitude,longitude)
          this.longitudecomp=longitude
          this.latitudecomp=latitude
          this.adresse.nativeElement.value=address
           console.log('Address:', address);

        } else {
          console.log('No results found');
        }
      } else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }


  getCompanyDetails()
  {
     this.miseenrelationservice.getCompany(this.userId).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          //  const token = response.body.token;
          if (response.body.idCompany != "") {
            this.hidebouton = true;
            this.hideboutonupdate = false;
             this.companyupdate = response.body;

            // Populate the form controls with the received data
            this.addForm.patchValue({
              companyLegalName: this.companyupdate.companyLegalName,
              fiscalNumber: this.companyupdate.fiscalNumer, // Note: Typo in your JSON
              adresse: this.companyupdate.adresse,
              contactMail: this.companyupdate.contactMail,
              domain: this.companyupdate.domaine,
              webSite: this.companyupdate.webSite,
              fixContact: this.companyupdate.fixContact,
              chiffreaffairelastyear: this.companyupdate.chiffreaffairelastyear,
              employees: this.companyupdate.employees
            })

          } else {
            this.hidebouton = false;
            this.hideboutonupdate = true;
            Swal.fire({
              title: 'Oops?',
              text: "Veuillez saisir les informations de votre entreprise pour mieux exploitez BizMatch",
              icon: 'warning',
              showCancelButton: false,
              showConfirmButton: false,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33'
            })
          }
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
      }
    });
  }
}
