import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SingInComponent} from "./Authentification/sing-in/sing-in.component";
 import {
  EntrepriseDashboardComponent
} from "./MainHome/EntrepriseHome/entreprise-dashboard/entreprise-dashboard.component";
import {CreateaccountComponent} from "./Authentification/createaccount/createaccount.component";
import {AddEntrepriseDataComponent} from "./Entreprise/add-entreprise-data/add-entreprise-data.component";
import {MapsCompanyComponent} from "./Entreprise/maps-company/maps-company.component";
import {ListofconnexionrequestsComponent} from "./Entreprise/listofconnexionrequests/listofconnexionrequests.component";
import {AddmarcheComponent} from "./Entreprise/addmarche/addmarche.component";
import {ListmarcheComponent} from "./Entreprise/listmarche/listmarche.component";
import {ListeDesBesoinComponent} from "./IdentificationBesoin/Besoin/liste-des-besoin/liste-des-besoin.component";
import {AjoutDesBesoinComponent} from "./IdentificationBesoin/Besoin/ajout-des-besoin/ajout-des-besoin.component";
import {
  ModifierDesBesoinComponent
} from "./IdentificationBesoin/Besoin/modifier-des-besoin/modifier-des-besoin.component";
import {ModifierProfilComponent} from "./IdentificationBesoin/Profil/modifier-profil/modifier-profil.component";
import {AjoutProfilComponent} from "./IdentificationBesoin/Profil/ajout-profil/ajout-profil.component";
import {ListeProfilComponent} from "./IdentificationBesoin/Profil/liste-profil/liste-profil.component";
import {
  ListeopportunityComponent
} from "./DeveloppementBuisness/Opportunity/listeopportunity/listeopportunity.component";
import {
  AjouteropportunityComponent
} from "./DeveloppementBuisness/Opportunity/ajouteropportunity/ajouteropportunity.component";
import {
  ModifieropportunityComponent
} from "./DeveloppementBuisness/Opportunity/modifieropportunity/modifieropportunity.component";
import {ListeProjectComponent} from "./DeveloppementBuisness/Project/liste-project/liste-project.component";
import {AjouterProjectComponent} from "./DeveloppementBuisness/Project/ajouter-project/ajouter-project.component";
import {ModifierProjectComponent} from "./DeveloppementBuisness/Project/modifier-project/modifier-project.component";
import {
  ListeStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/liste-strategic-plan/liste-strategic-plan.component";
import {
  AjouterStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/ajouter-strategic-plan/ajouter-strategic-plan.component";
import {
  ModifierStrategicPlanComponent
} from "./DeveloppementBuisness/StrategicPlan/modifier-strategic-plan/modifier-strategic-plan.component";
import {AddReunionComponent} from "./ReunionB2B/add-reunion/add-reunion.component";
import {EditReunionComponent} from "./ReunionB2B/edit-reunion/edit-reunion.component";
import {ListreunionComponent} from "./ReunionB2B/listreunion/listreunion.component";
import {CalendarComponent} from "./Calendar/calendar/calendar.component";
import {OurEventComponent} from "./gestionEntreprise/our-event/our-event.component";
import {OurserviceComponent} from "./GestionService/ourservice/ourservice.component";
import {EventClientComponent} from "./gestionEntreprise/event-client/event-client.component";
import {ServiceClientComponent} from "./GestionService/service-client/service-client.component";
import {AddEventComponent} from "./gestionEntreprise/add-event/add-event.component";
import {AddServiceComponent} from "./GestionService/add-service/add-service.component";
import {DetailEventComponent} from "./gestionEntreprise/detail-event/detail-event.component";
import {DetailServiceComponent} from "./GestionService/detail-service/detail-service.component";
import {ListParticipationComponent} from "./gestionEntreprise/list-participation/list-participation.component";
import {ListServiceComponent} from "./GestionService/list-service/list-service.component";
import {ListAllPartComponent} from "./gestionEntreprise/list-all-part/list-all-part.component";
import {DeleteEventComponent} from "./gestionEntreprise/delete-event/delete-event.component";
import {DeleteServiceComponent} from "./GestionService/delete-service/delete-service.component";
import {DeletepartComponent} from "./gestionEntreprise/deletepart/deletepart.component";
import {DeleteReservationComponent} from "./GestionService/delete-reservation/delete-reservation.component";
import {DetailevntclientComponent} from "./gestionEntreprise/detailevntclient/detailevntclient.component";
import {DetailClientComponent} from "./GestionService/detail-client/detail-client.component";
import {ChatModuleComponent} from "./chat-module/chat-module.component";
import {EntrepriseDetailsComponent} from "./entreprise-details/entreprise-details.component";
import {SignatureComponent} from "./signature/signature.component";
import {ContratComponent} from "./contrat/contrat.component";

const routes: Routes = [
  {
    path:"ListMarche",
    component:ListmarcheComponent
  },
  {
    path:"AddMarche",
    component:AddmarcheComponent
  },
  {
    path:"AddEntreprise",
    component:AddEntrepriseDataComponent
  },
  {
    path:"HomeEntreprise",
    component:EntrepriseDashboardComponent
  },
  {
    path:"ListCompany",
    component:MapsCompanyComponent
  },
  {
    path: '', redirectTo: '/Connect', pathMatch: 'full'

  },
  {
    path:"Connect",
    component:SingInComponent
  },
  {
    path:"CreateAccount",
    component:CreateaccountComponent
  },
  {
    path:"DemandeList",
    component:ListofconnexionrequestsComponent
  },
  {
    path: 'listebesoin',
    component: ListeDesBesoinComponent
  },
  {
    path: 'ajouterbesoin',
    component: AjoutDesBesoinComponent
  },
  {
    path:'modifierbesoin/:id',
    component:ModifierDesBesoinComponent
  },
  {
    path:'modifierprofil/:id',
    component:ModifierProfilComponent
  },
  {
    path: 'ajouterprofil',
    component: AjoutProfilComponent
  },
  {
    path:'listeprofil',
    component:ListeProfilComponent
  },
  {
    path:'listeopportunity',
    component:ListeopportunityComponent
  },
  {
    path:'ajouteropportunity',
    component:AjouteropportunityComponent
  },
  {
    path:'modifieropportunity/:id',
    component:ModifieropportunityComponent
  },
  {
    path:'listeproject',
    component:ListeProjectComponent
  },
  {
    path:'ajouterproject',
    component:AjouterProjectComponent
  },
  {
    path:'modifierproject/:id',
    component:ModifierProjectComponent
  },
  {
    path:'listestrategicplan',
    component:ListeStrategicPlanComponent
  },
  {
    path:'ajouterstrategicplan',
    component:AjouterStrategicPlanComponent
  },
  {
    path:'modifierstrategicplan/:id',
    component:ModifierStrategicPlanComponent
  },{
    path:"addreunion/:id",
    component:AddReunionComponent
  },{
    path:"editreunion/:ide/:idr",
    component:EditReunionComponent
  },{
    path:"listReunion/:role/:id",
    component:ListreunionComponent
  },{
    path:"calendar/:role/:id",
    component:CalendarComponent
  },
  {path:'ourevent',component:OurEventComponent},
  {path:'ourservice',component:OurserviceComponent},
  {path:'eventclient',component:EventClientComponent},
  {path:'serviceclient',component:ServiceClientComponent},
  {path:'addevent',component:AddEventComponent},
  {path:'addService',component:AddServiceComponent},
  {path:'detailsevent/:id',component:DetailEventComponent},
  {path:'detailservice/:id',component:DetailServiceComponent},
  {path:'listpart/:id',component:ListParticipationComponent},
  {path:'listRevervation/:id',component:ListServiceComponent},
  {path:'listAllpart',component:ListAllPartComponent},
  {path:'deleteevent/:id',component:DeleteEventComponent},
  {path:'deleteService/:id',component:DeleteServiceComponent},
  {path:'deletepart/:id',component:DeletepartComponent},
  {path:'deleteReservation/:id',component:DeleteReservationComponent},
  {path:'detailseventclient/:id',component:DetailevntclientComponent},
  {path:'detailservicetclient/:id',component:DetailClientComponent}
,

  {
    path:"chat",component:ChatModuleComponent
  },
  {
    path:"details_entreprise/:id",component:EntrepriseDetailsComponent
  },
  {
    path:"signature/:id",component:SignatureComponent
  },{
    path:"contrat",component:ContratComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
