import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NgSignaturePadOptions, SignaturePadComponent} from '@almothafar/angular-signature-pad';
import {PartServiceService} from "../Services/part-service.service";
import {Contrat} from "../Model/Contrat";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css'],

})
export class SignatureComponent implements AfterViewInit,OnInit{

  @ViewChild('signature', { static: false })
  public signaturePad!: SignaturePadComponent;

   signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300
  };
  private c!: Contrat;
  currentCompanyId=localStorage.getItem('idCompany');
  id: any;

  constructor(private service:PartServiceService,private route: ActivatedRoute) {
    // no-op
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        // Now, you can use the 'id' value in your SignatureComponent.
        console.log('Received id in SignatureComponent:', this.id);
      }
    });
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    console.log('Completed drawing', event);
    console.log(this.signaturePad.toDataURL());
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }

  saveSignature(){}
  clearSignature() {
    this.signaturePad.clear();
  }
  addContrat(){
    this.c.entreprise1Id!=this.currentCompanyId
    this.c.entreprise2Id=this.id
    this.c.signature=true;
    this.service.addContrat(this.c).subscribe(
      (response) => {
        // The POST request was successful, and you can handle the response here.
        console.log('Contract added successfully:', response);

      },
      (error) => {
        // Handle errors if the POST request fails.
        console.error('Error adding contract:', error);
      }
    );
  }
}
