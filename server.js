var express = require("express");
var app = express();
var fs = require('fs');
const { Server } = require("http");

var moisture_sensor = "/umidity_data"
var temp_sensor = "/temp_data"

//requisição que obrigatoriamente deve ser realizada para chamar a pagina home "/"
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    fs.open (moisture_sensor, "w", (err, fd) => {
        if(err) {
            console.log(err.message);
        } else {
            //efetuando a leitura do arquivo
            fs.readFile(moisture_sensor, 'utf8', function(err,data) {
                if(err) throw err; // msg de erro
                //enviando para o console o resultado da leitura
                console.log('Sensor de umidade do solo: ', data); //exibe dado do sensor no console
            });
        }
    })
})


//requisição de dados do sensor 1
app.get("/sensor1", function(req, res){
    fs.open(moisture_sensor, "w", (err, fd) => {
        if(err) {
            console.log(err.message);
        } else {
            fs.readFile(moisture_sensor, 'utf8', function(err,data){
                if(err) throw err;  //msg de erro
                //enviando para o console o resultado da leitura
                console.log('Sensor de temperatura: ', data); //exibe o dado do sensor no console
            });
        }
    })
})

//requisição de dados do sensor 2
app.get("/sensor2", function(req, res){
    fs.open(temp_sensor, "w", (err, fd) => {
        if(err) {
            console.log(err.message);
        } else {
            fs.readFile(temp_sensor, 'utf8', function(err,data){
                if(err) throw err;  //msg de erro
                //enviando para o console o resultado da leitura
                console.log(data); //exibe o dado do sensor no console
            });
        }
    })
})

app.listen(3000); //porta utilizada pra hospedagem
