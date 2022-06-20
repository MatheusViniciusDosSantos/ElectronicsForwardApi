"use strict"

const express = require("express");
const cors = require("cors");
const porta = process.env.PORT || 3000;

class App{
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());
        var contador = 0;
        
        app.get("/", (req, res) => {
            res.json({
                name: "electronicsforwardapi",
                version: "1.0.0",
                description: "Loja de produtos eletrônicos ElectronicsForward",
                author : "Matheus Vinícius dos Santos"
            });
        })

        app.get("/ping", (req, res) => {
            res.json({"Resposta" : "pong"})
        })

        app.get("/contador", (req, res) => {
            res.json({"contador": contador})
        })

        app.get("/incremento", (req, res) => {
            contador++;
            res.json({"contador" : contador});
        })

        app.listen(porta, () => {
            console.log("O servidor foi iniciado na porta: ${porta}")
        })
    }

}

App.init();