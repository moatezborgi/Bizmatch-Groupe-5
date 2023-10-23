import {Component} from "@angular/core";

export interface Reunion {
  id: number;
  idEntreprise: number;
  idParticipants: number[];
  dateTime: Date;
  reunionStatus: ReunionStatus;
  subject: string;
  description: string;
  meetingLink: string;
}
export enum ReunionStatus {
  SCHEDULED='SCHEDULED',
  RE_SCHEDULED='RE_SCHEDULED',
  CANCELLED='CANCELLED',
  TERMINATED='TERMINATED',
PASSED='PASSED',
  SELECTED='SELECTED',
REJECTED='REJECTED'
}
