import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListeDesBesoinComponent} from "./IdentificationBesoin/Besoin/liste-des-besoin/liste-des-besoin.component";
import {AjoutDesBesoinComponent} from "./IdentificationBesoin/Besoin/ajout-des-besoin/ajout-des-besoin.component";
import {
  ModifierDesBesoinComponent
} from "./IdentificationBesoin/Besoin/modifier-des-besoin/modifier-des-besoin.component";
import {ModifierProfilComponent} from "./IdentificationBesoin/Profil/modifier-profil/modifier-profil.component";
import {AjoutProfilComponent} from "./IdentificationBesoin/Profil/ajout-profil/ajout-profil.component";
import {ListeProfilComponent} from "./IdentificationBesoin/Profil/liste-profil/liste-profil.component";

const routes: Routes = [
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

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
