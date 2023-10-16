import { Component, OnInit } from '@angular/core';
import {  ToolbarService,  LinkService,  ImageService,  HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import {Reunion, ReunionStatus} from "../../Model/Reunion";
import {ActivatedRoute, Router} from "@angular/router";
import {ReunionService} from "../../Services/R&C B2B/ReunionB2B/reunion.service";
import {DatePipe} from "@angular/common";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-reunion',
  templateUrl: './add-reunion.component.html',
  styleUrls: ['./add-reunion.component.css'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AddReunionComponent implements OnInit {
  selectedvalue: any;

  Change(e: any) {
    console.log(e.target.value);
    this.selectedvalue = e.target.value;
    console.log(this.selectedvalue);
    localStorage.setItem('selectedvalue', this.selectedvalue); // save the selected value to localStorage

  }
  selectedType: ReunionStatus = ReunionStatus.SCHEDULED;
  username: any;

  Reunion = {
    id: 0,
    idEntreprise: 0,
    idParticipants: [],
    dateTime: '0',
    reunionStatus: ReunionStatus.SCHEDULED,
    meetingLink: ""
  };

  types = Object.values(ReunionStatus); // Assuming you have a TypeDuty enum
  selectedType1: String = "Desactiver ";
  selectedType2: Date = new Date();
  currentDate;
  isActive: boolean = true;  constructor(private aRoute: ActivatedRoute,
                                         private route: Router,
                                         private reunionService: ReunionService,
                                         private datePipe: DatePipe,
                                         private fb: FormBuilder) {
    this.currentDate = new Date();
    this.isActive = true;
    this.selectedvalue = ''; }

  table: any;
  list: any;

  ngOnInit(): void {
  //  this.username = this.aRoute.snapshot.params['username'];
    console.log(this.currentDate);
    this.selectedvalue = localStorage.getItem('selectedvalue'); // retrieve the selected value from localStorage
    this.Change({target: {value: this.selectedvalue}});
  }

  onTypeChange(value: any) {
    this.selectedType = value;
   // this.reunion?.reunionStatus = value; // set the selected type
  }

  async alertcannotUpdatetWithSuccess() {
    const msg = await Swal.fire(
      "FAILED",
      "Your Event cannot added !",
      "error"
    );
  }

  async alertAddWithSuccess() {
    const msg = await Swal.fire(
      "DONE",
      "Your Event added successfully!",
      "success"
    );
  }

  assignreunion(reunion: any) {
    console.log("hawhaw")
    console.log(reunion);
   // reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss');
    //reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss.SSSZ');
    reunion.dateTime = new DatePipe('en-US').transform(reunion.dateTime, 'yyyy-MM-ddTHH:mm:ss');

    // this.dutyPlanificationDTO.duty.type = this.selectedType; // set the selected type
    this.reunionService.addReunion(reunion).subscribe(
      () => {
     //   this.notificationService.notify('Duty Added!');
        //this.route.navigate(['listReunion'])
      },
      (error) => {
        this.alertcannotUpdatetWithSuccess().then(() => {
          console.log(error);
        });
      },
      async () => {
        await this.alertAddWithSuccess();
      }
    );
    console.log(reunion)
  }
}
