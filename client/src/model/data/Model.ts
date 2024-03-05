export interface IProtocol {
    idProtocol:   number;
    protocolName: string;
    idTemplate: number;
    nickname_utente?: string;
    phase:        IPhase[];
}

export interface IPhase {
    idPhase:   number;
    phaseName: string
    timeSet: string;
    contentArray: IContentArray[];

}

export interface IContentArray{
    activityId?:   number;
    activityName?: string;
    activityDesc?: string;
    posizione?: string;
    idChat?:       number;
    chat?:         string;
}

export interface Iactivity {
    activityArray: IActivityArray[]
  }
  
export interface IActivityArray {
    activityId: number
    activityName: string
    activityDesc: string
  }
  

export interface IUtente{
  username?: string
  email?: string
  nome?: string
  cognome?: string 
  password?: string

}

export interface ITemplate {
  idTemplate: string
  templateName: string
  phase: phaseTemplate[]
}

export interface phaseTemplate {
  idPhase: string
  phaseName: string
}
  