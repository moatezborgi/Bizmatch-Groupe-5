export class Marche{
  idMarche: string;
  descMarche: string;
  secteur: string;
  rentabilite: string;
  tailledemarche: number;
  duree: number;
  datelancement: Date;
  companyId: string;
  statusmarche: boolean;
  datePublication!: Date;
  datecloture!: Date;

  constructor(
    idMarche: string, descMarche: string, secteur: string, rentabilite: string,
    tailledemarche: number, duree: number, datelancement: Date, companyId: string, statusmarche: boolean) {
    this.idMarche = idMarche;
    this.descMarche = descMarche;
    this.secteur = secteur;
    this.rentabilite = rentabilite;
    this.tailledemarche = tailledemarche;
    this.duree = duree;
    this.datelancement = datelancement;
    this.companyId = companyId;
    this.statusmarche = statusmarche;

  }
}
