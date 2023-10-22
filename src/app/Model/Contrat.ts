export class Contrat {
  id!: number;
  contenu!: string;
  dateFin!: Date;
  dateDebut!: Date;
  entreprise1Id!: string;
  signature: boolean = false;
  entreprise2Id!: string;
  typeParteneriat!: TypeParteneriat;
}
enum TypeParteneriat {
  COMMERCIAL = "COMMERCIAL",
  COENTREPRISE = "COENTREPRISE",
  SOUS_TRAITANCE = "SOUS_TRAITANCE",
  LICENCE = "LICENCE",
  FRANCHISE = "FRANCHISE",
  DISTRIBUTION = "DISTRIBUTION",
  APPROVISIONNEMENT = "APPROVISIONNEMENT",
  MARKETING = "MARKETING",
  FINANCIER = "FINANCIER",
  RESSOURCES_HUMAINES = "RESSOURCES_HUMAINES",
  TECHNOLOGIQUE = "TECHNOLOGIQUE",
  DEVELOPPEMENT_DURABLE = "DEVELOPPEMENT_DURABLE",
}

