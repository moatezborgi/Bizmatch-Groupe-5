import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Client, Stomp} from "@stomp/stompjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { LeftsidebarComponent } from './Shared/leftsidebar/leftsidebar.component';
import { MainSharedComponenetComponent } from './Shared/main-shared-componenet/main-shared-componenet.component';
import { SingInComponent } from './Authentification/sing-in/sing-in.component';
 import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EntrepriseDashboardComponent } from './MainHome/EntrepriseHome/entreprise-dashboard/entreprise-dashboard.component';
import { AddEntrepriseDataComponent } from './Entreprise/add-entreprise-data/add-entreprise-data.component';
import { CreateaccountComponent } from './Authentification/createaccount/createaccount.component';
import { MapsCompanyComponent } from './Entreprise/maps-company/maps-company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import { PopupcompanyComponent } from './Entreprise/popupcompany/popupcompany.component';
import {MatIconModule} from "@angular/material/icon";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import { ListofconnexionrequestsComponent } from './Entreprise/listofconnexionrequests/listofconnexionrequests.component';
import { AddmarcheComponent } from './Entreprise/addmarche/addmarche.component';
import { ListmarcheComponent } from './Entreprise/listmarche/listmarche.component';
import {NgxPaginationModule} from "ngx-pagination";
import {CommonModule, DatePipe} from "@angular/common";
import {CarouselModule} from "ngx-bootstrap/carousel";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {DragScrollModule} from "ngx-drag-scroll";
import {FullCalendarModule} from "@fullcalendar/angular";
import {CalendarComponent} from "./Calendar/calendar/calendar.component";
import {
  AjouteropportunityComponent
} from "./DeveloppementBuisness/Opportunity/ajouteropportunity/ajouteropportunity.component";
import {
  ListeopportunityComponent
} from "./DeveloppementBuisness/Opportunity/listeopportunity/listeopportunity.component";
import {
  ModifieropportunityComponent
} from "./DeveloppementBuisness/Opportunity/modifieropportunity/modifieropportunity.component";
import {AjouterProjectComponent} from "./DeveloppementBuisness/Project/ajouter-project/ajouter-project.component";
import {ListeProjectComponent} from "./DeveloppementBuisness/Project/liste-project/liste-project.component";
import {ModifierProjectComponent} from "./DeveloppementBuisness/Project/modifier-project/modifier-project.component";
import {AjoutDesBesoinComponent} from "./IdentificationBesoin/Besoin/ajout-des-besoin/ajout-des-besoin.component";
import {ListeDesBesoinComponent} from "./IdentificationBesoin/Besoin/liste-des-besoin/liste-des-besoin.component";
import {
  ModifierDesBesoinComponent
} from "./IdentificationBesoin/Besoin/modifier-des-besoin/modifier-des-besoin.component";
import {AjoutProfilComponent} from "./IdentificationBesoin/Profil/ajout-profil/ajout-profil.component";
import {ListeProfilComponent} from "./IdentificationBesoin/Profil/liste-profil/liste-profil.component";
import {ModifierProfilComponent} from "./IdentificationBesoin/Profil/modifier-profil/modifier-profil.component";
import {AddReunionComponent} from "./ReunionB2B/add-reunion/add-reunion.component";
import {EditReunionComponent} from "./ReunionB2B/edit-reunion/edit-reunion.component";
import {ListreunionComponent} from "./ReunionB2B/listreunion/listreunion.component";
import {DisableControlDirective} from "./ReunionB2B/disable-control.directive";
import {
  ModifierStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/modifier-strategic-plan/modifier-strategic-plan.component";
import {
  ListeStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/liste-strategic-plan/liste-strategic-plan.component";
import {
  AjouterStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/ajouter-strategic-plan/ajouter-strategic-plan.component";
import {RichTextEditorModule} from "@syncfusion/ej2-angular-richtexteditor";
import {OurEventComponent} from "./gestionEntreprise/our-event/our-event.component";
import {AddEventComponent} from "./gestionEntreprise/add-event/add-event.component";
import {DetailEventComponent} from "./gestionEntreprise/detail-event/detail-event.component";
import {EventClientComponent} from "./gestionEntreprise/event-client/event-client.component";
import {DetailevntclientComponent} from "./gestionEntreprise/detailevntclient/detailevntclient.component";
import {ListParticipationComponent} from "./gestionEntreprise/list-participation/list-participation.component";
import {ListAllPartComponent} from "./gestionEntreprise/list-all-part/list-all-part.component";
import {DeleteEventComponent} from "./gestionEntreprise/delete-event/delete-event.component";
import {DeletepartComponent} from "./gestionEntreprise/deletepart/deletepart.component";
import {OurserviceComponent} from "./GestionService/ourservice/ourservice.component";
import {DetailServiceComponent} from "./GestionService/detail-service/detail-service.component";
import {AddServiceComponent} from "./GestionService/add-service/add-service.component";
import {DeleteServiceComponent} from "./GestionService/delete-service/delete-service.component";
import {ServiceClientComponent} from "./GestionService/service-client/service-client.component";
import {DetailClientComponent} from "./GestionService/detail-client/detail-client.component";
import {ListServiceComponent} from "./GestionService/list-service/list-service.component";
import {DeleteReservationComponent} from "./GestionService/delete-reservation/delete-reservation.component";
import {AngularSignaturePadModule} from "@almothafar/angular-signature-pad";
import {ChatModuleComponent} from "./chat-module/chat-module.component";
import {EntrepriseDetailsComponent} from "./entreprise-details/entreprise-details.component";
import {SignatureComponent} from "./signature/signature.component";
import {ContratComponent} from "./contrat/contrat.component";
import {WebSocketServiceService} from "./Services/web-socket-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    MainSharedComponenetComponent,
    SingInComponent,
    EntrepriseDashboardComponent,
    AddEntrepriseDataComponent,
    CreateaccountComponent,
    MapsCompanyComponent,
    PopupcompanyComponent,
    ListofconnexionrequestsComponent,
    AddmarcheComponent,
    ListmarcheComponent,
    CalendarComponent,
    AjouteropportunityComponent,
    ListeopportunityComponent,
    ModifieropportunityComponent,
    AjouterProjectComponent,
    ListeProjectComponent,
    ModifierProjectComponent,
    AjoutDesBesoinComponent,
    ListeDesBesoinComponent,
    ModifierDesBesoinComponent,
    AjoutProfilComponent,
    ListeProfilComponent,
    ModifierProfilComponent,
    AddReunionComponent,
    EditReunionComponent,
    ListreunionComponent,
    DisableControlDirective,
    ModifierStrategicPlanComponent,
    ListeStrategicPlanComponent,
    AjouterStrategicPlanComponent,
    OurEventComponent,
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
    DeleteReservationComponent,
    ChatModuleComponent,
    EntrepriseDetailsComponent,
    SignatureComponent,
    ContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    FullCalendarModule,
    CarouselModule,
    SlickCarouselModule,
    DragScrollModule,
    RichTextEditorModule,
    AngularSignaturePadModule,

  ],
  providers: [
    {
    provide: WebSocketServiceService,
  useFactory: (client: Client) => {
  return new WebSocketServiceService(client);
},
  deps: [Client]
},
{
  provide: Client,
    useValue: Stomp.client('ws://localhost:9050/chat')
},
    DatePipe,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false,showError: true},
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
