"use strict"

const express = require("express");
const cors = require("cors");

class App{
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json);
        
        app.get("/endpoint", (req, res) => {
            res.json({
                "name": "electronicsforwardapi",
                "version": "1.0.0",
                "description": "Loja de produtos eletrônicos ElectronicsForward",
                author : "Matheus Vinícius dos Santos"
            });
        })
        app.listen(3000, () => {
            console.log("Startou");
        });
    }

}

App.init();