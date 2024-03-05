import React, {Component} from 'react';
import { IUtente } from './Model';
import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios';



class UserVM {

    login = (login: string, password: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post("http://localhost/artes-backend/action_user.php", {
              action: "getLogin",
              login_email: login,
              password,
            })
            .then((response) => { resolve(response.data);})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    register = (username: string, nome: string, cognome: string, email: string, password: string): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post("http://localhost/artes-backend/action_user.php", {
                action:"createUser",
                username:username,
                nome:nome,
                cognome:cognome,
                email:email,
                password:password,
            })
            .then((response) => { resolve(response.data);})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };

    logout = (): Promise<any> => {
        return new Promise((resolve, reject) => {
          axios
            .post("http://localhost/artes-backend/action_user.php", {
              action: "logOut",
            })
            .then((response) => {
                resolve(response.data); 
                window.location.href = "http://localhost:3000/";})
            .catch((error) => {
              console.error("Errore", error);
              reject(error);
            });
        });
    };
}
export const user = new UserVM;

