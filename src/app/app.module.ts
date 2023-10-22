  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { LeftsidebarComponent } from './Shared/leftsidebar/leftsidebar.component';
import { MainSharedComponenetComponent } from './Shared/main-shared-componenet/main-shared-componenet.component';
import { ChatModuleComponent } from './chat-module/chat-module.component';
import { EntrepriseDetailsComponent } from './entreprise-details/entreprise-details.component';
  import {Client, Stomp} from "@stomp/stompjs";
  import {DatePipe} from "@angular/common";
  import {WebSocketServiceService} from "./Services/web-socket-service.service";
  import {FormsModule} from "@angular/forms";
  import {HttpClient, HttpClientModule} from "@angular/common/http";
import { SignatureComponent } from './signature/signature.component';
  import {AngularSignaturePadModule} from "@almothafar/angular-signature-pad";
import { ContratComponent } from './contrat/contrat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftsidebarComponent,
    MainSharedComponenetComponent,
    ChatModuleComponent,
    EntrepriseDetailsComponent,
    SignatureComponent,
    ContratComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularSignaturePadModule
  ],
  providers: [{
    provide: WebSocketServiceService,
    useFactory: (client: Client) => {
      return new WebSocketServiceService(client);
    },
    deps: [Client]
  },
    DatePipe,
    {
      provide: Client,
      useValue: Stomp.client('ws://localhost:9999/chat')
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
