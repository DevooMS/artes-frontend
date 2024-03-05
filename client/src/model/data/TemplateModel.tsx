import React, {Component} from 'react';
import { IUtente } from './Model';
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';



class TemplateVM {
    username = localStorage.getItem("username");
    session = localStorage.getItem("session");

    getTemplate = (): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"getTemplate",
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

    setContentProtocol = (idTemplate:string,name:string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post('http://localhost/artes-backend/action_protocol.php', {
                action:"createProtocol",
                username:this.username,
                session:this.session,
                idTemplate:idTemplate,
                name,
            })
            .then((response) => { resolve(response.data);})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    

}
export const template = new TemplateVM;

