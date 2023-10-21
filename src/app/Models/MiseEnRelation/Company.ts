export class Company {
  idCompany!: string;
  companyLegalName!: string;
  fiscalNumer!: string;
  adresse!: string;
  contactMail!: string;
  longitude!: string;
  latitude!: string;
  domaine!: string;
  webSite!: string;
  representant!: string;
  fixContact!: string;
chiffreaffairelastyear!:string;
  employees!:number;

  constructor(idCompany: string, companyLegalName: string,fiscalNumer:string,adresse: string,contactMail: string,longitude: string,latitude: string,domaine: string,
    webSite: string,
    representant: string,
    fixContact: string,
    chiffreaffairelastyear:string,
    employees:number) {
    this.idCompany=idCompany;
    this.companyLegalName = companyLegalName;
    this.fiscalNumer = fiscalNumer;
    this.adresse = adresse;
    this.contactMail = contactMail;
    this.longitude = longitude;
    this.latitude = latitude;
    this.domaine = domaine;
    this.webSite = webSite;
    this.representant = representant;
    this.fixContact = fixContact;
    this.chiffreaffairelastyear=chiffreaffairelastyear;
    this.employees=employees;
  }
}
