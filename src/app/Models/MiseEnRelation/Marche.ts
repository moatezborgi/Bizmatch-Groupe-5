export class Marche{
  idMarche: number;
  descMarche: string;
  secteur: string;
  rentabilite: string;
  tailledemarche: number;
  duree: number;
  datelancement: Date;
  companyId: string;
  statusmarche: boolean;
  datePublication: Date;
  datecloture: Date;
  constructor(
    idMarche: number, descMarche: string, secteur: string, rentabilite: string,
    tailledemarche: number, duree: number, datelancement: Date, companyId: string, statusmarche: boolean, datePublication: Date, datecloture: Date) {
    this.idMarche = idMarche;
    this.descMarche = descMarche;
    this.secteur = secteur;
    this.rentabilite = rentabilite;
    this.tailledemarche = tailledemarche;
    this.duree = duree;
    this.datelancement = datelancement;
    this.companyId = companyId;
    this.statusmarche = statusmarche;
    this.datePublication = datePublication;
    this.datecloture = datecloture;
  }
}
