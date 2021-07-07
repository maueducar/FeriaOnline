'use strict'
//var project = require('../models/project');
var sql = require('mssql');

var  reportsController = {

    
    getClients: function(req,res){
        var ClientId = req.params.id;
         // create Request object
        var request = new sql.Request();         
         // query to the database and get the records
        request.query('select top 100 CodCliente,RazSocial,NumDocume from VcClient', function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta'});
            if (!recordset) res.status(404).send({message: 'No existe cliente'});
            res.send(recordset);    
        });
    },

    getGastos: function(req,res){
        var request = new sql.Request();
        request.input('FechaDesde','01/' + req.params.mes + '/' + req.params.ano);
        request.execute("proc_pivotGastos", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros'});
            res.send(recordset);    
        });
    },

    getDetalleGastos: function(req,res){
        var ano  = req.params.ano;
        var mes  = req.params.mes;
        var cuentaContable = req.params.cuentaContable;
        //var concepto = req.params.concepto;
         // create Request object
        var request = new sql.Request();
         // query to the database and get the records
        request.query("set dateformat dmy; select * from F_GastosConcepto2('"+cuentaContable+"','01/"+mes+"/"+ano+"',null,null)", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset);    
        });
    }, 

    getIngresos: function(req,res){
        var request = new sql.Request();
        request.input('FechaDesde','01/' + req.params.mes + '/' + req.params.ano);
        request.execute("proc_pivotIngresos", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros'});
            res.send(recordset);    
        });
    },

    getEnviosCobranza: function(req,res){
        var request = new sql.Request();
         // query to the database and get the records
        request.input('FechaDesde','01/' + req.params.mes + '/' + req.params.ano);
        request.execute("proc_pivotEnviosCobranza", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros'});
            res.send(recordset);    
        });
    }
};

module.exports = reportsController;