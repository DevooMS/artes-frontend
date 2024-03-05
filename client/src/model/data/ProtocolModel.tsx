import React, {Component} from 'react';
import { IPhase, IContentArray } from './Model';
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';



class ProtocolVM {
    username = localStorage.getItem("username");
    session = localStorage.getItem("session");

    getProtocol = (): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"getProtocol",
                username:this.username,
                session:this.session,
            })
            .then((response) => { resolve(response.data);})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    setContentProtocol = (contentArray:IContentArray[],idPhase:number,timeSet:string,phaseName:string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"setContentProtocol",
                username:this.username,
                session:this.session,
                phaseName,
                timeSet,
                idPhase,
                contentArray,
            })
            .then((response) => { resolve(response.data);})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    copyProtocol = (idP:number,idTemplate:number,phaseArray:IPhase[],protocolName:string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"copyProtocol",
                username:this.username,
                session:this.session,
                idP,
                protocolName,
                idTemplate,
                phaseArray,
            })
            .then((response) => { resolve(response.data); })
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    changeProtocolName = (idP:number,idTemplate:number,phaseArray:IPhase[],protocolName:string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"changeProtocolName",
                username:this.username,
                session:this.session,
                idP,
                protocolName,
                idTemplate,
                phaseArray,
            })
            .then((response) => { resolve(response.data); })
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    getActivity = (): Promise<any> => {
        return new Promise((resolve, reject) => {
        axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"getActivity",
                username:this.username,
                session:this.session,
            })
            .then((response) => {
                resolve(response.data); })
            .catch((error) => {
            console.error("Errore", error);
            reject(error);
            });
        });
    };



}
export const protocol = new ProtocolVM;

