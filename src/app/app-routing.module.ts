import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/home/home.component";
import {AddpartnershipComponent} from "./Partnershiprequest/addpartnership/addpartnership.component";
import {ListpartnershipComponent} from "./Partnershiprequest/listpartnership/listpartnership.component";
import {AddReunionComponent} from "./ReunionB2B/add-reunion/add-reunion.component";
import {ListreunionComponent} from "./ReunionB2B/listreunion/listreunion.component";
import {CalendarComponent} from "./Calendar/calendar/calendar.component";
import {ListProjectComponent} from "./Project/list-project/list-project.component";
import {AddProjectComponent} from "./Project/add-project/add-project.component";
import {AddOpportunityComponent} from "./Opportunity/add-opportunity/add-opportunity.component";
import {ListOpportunityComponent} from "./Opportunity/list-opportunity/list-opportunity.component";

const routes: Routes = [
  {
    path: '',
    pathMatch:"full",
    redirectTo: 'home'
  },{
  path:"home",
  component:HomeComponent
  },{
    path:"addpartnership",
    component:AddpartnershipComponent
  },{
    path:"addreunion",
    component:AddReunionComponent
  },{
    path:"listpartnership",
    component:ListpartnershipComponent
  },{
    path:"listReunion",
    component:ListreunionComponent
  },{
    path:"calendar/:id",
    component:CalendarComponent
  },{
    path:"listproject",
    component:ListProjectComponent
  },{
    path:"addproject",
    component:AddProjectComponent
  },{
    path:"addopportunity",
    component:AddOpportunityComponent
  },{
    path:"listopportunity",
    component:ListOpportunityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
