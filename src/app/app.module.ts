import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { AddpartnershipComponent } from './Partnershiprequest/addpartnership/addpartnership.component';
import { ListpartnershipComponent } from './Partnershiprequest/listpartnership/listpartnership.component';
import { AddReunionComponent } from './ReunionB2B/add-reunion/add-reunion.component';
import { ListreunionComponent } from './ReunionB2B/listreunion/listreunion.component';
import { CalendarComponent } from './Calendar/calendar/calendar.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import {RichTextEditorModule} from "@syncfusion/ej2-angular-richtexteditor";
import {NgxPaginationModule} from "ngx-pagination";
import {AddOpportunityComponent} from "./Opportunity/add-opportunity/add-opportunity.component";
import {ListOpportunityComponent} from "./Opportunity/list-opportunity/list-opportunity.component";
import {AddProjectComponent} from "./Project/add-project/add-project.component";
import {ListProjectComponent} from "./Project/list-project/list-project.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddpartnershipComponent,
    ListpartnershipComponent,
    AddReunionComponent,
    ListreunionComponent,
    CalendarComponent,
    AddOpportunityComponent,
    ListOpportunityComponent,
    AddProjectComponent,
    ListProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    RichTextEditorModule,
    NgxPaginationModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
