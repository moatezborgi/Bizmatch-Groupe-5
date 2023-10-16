import {Component} from "@angular/core";

export interface Reunion {
  id: number;
  idEntreprise: number;
  idParticipants: number[];
  dateTime: Date;
  reunionStatus: ReunionStatus;
  meetingLink: string;
}
export enum ReunionStatus {
  SCHEDULED='SCHEDULED',
  RE_SCHEDULED='RE_SCHEDULED',
  CANCELLED='CANCELLED',
NO_SHOW='NO_SHOW',
  SELECTED='SELECTED',
REJECTED='REJECTED'
}
