import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { LeftsidebarComponent } from './Shared/leftsidebar/leftsidebar.component';
import { MainSharedComponenetComponent } from './Shared/main-shared-componenet/main-shared-componenet.component';
import {OurEventComponent} from "./gestionEntreprise/our-event/our-event.component";
import { AddEventComponent } from './gestionEntreprise/add-event/add-event.component';
import { DetailEventComponent } from './gestionEntreprise/detail-event/detail-event.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { EventClientComponent } from './gestionEntreprise/event-client/event-client.component';
import { DetailevntclientComponent } from './gestionEntreprise/detailevntclient/detailevntclient.component';
import { ListParticipationComponent } from './gestionEntreprise/list-participation/list-participation.component';
import { ListAllPartComponent } from './gestionEntreprise/list-all-part/list-all-part.component';
import {CommonModule} from "@angular/common";
import { DeleteEventComponent } from './gestionEntreprise/delete-event/delete-event.component';
import { DeletepartComponent } from './gestionEntreprise/deletepart/deletepart.component';
import { OurserviceComponent } from './GestionService/ourservice/ourservice.component';
import { DetailServiceComponent } from './GestionService/detail-service/detail-service.component';
import { AddServiceComponent } from './GestionService/add-service/add-service.component';
import { DeleteServiceComponent } from './GestionService/delete-service/delete-service.component';
import { ServiceClientComponent } from './GestionService/service-client/service-client.component';
import { DetailClientComponent } from './GestionService/detail-client/detail-client.component';
import { ListServiceComponent } from './GestionService/list-service/list-service.component';
import { DeleteReservationComponent } from './GestionService/delete-reservation/delete-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    OurEventComponent,
    MainSharedComponenetComponent,
    AddEventComponent,
    DetailEventComponent,
    EventClientComponent,
    DetailevntclientComponent,
    ListParticipationComponent,
    ListAllPartComponent,
    DeleteEventComponent,
    DeletepartComponent,
    OurserviceComponent,
    DetailServiceComponent,
    AddServiceComponent,
    DeleteServiceComponent,
    ServiceClientComponent,
    DetailClientComponent,
    ListServiceComponent,
    DeleteReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
