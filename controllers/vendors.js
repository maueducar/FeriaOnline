'use strict'
var sql = require('mssql');

var  vendorsController = {


    getVendedor: function(req,res){
        var request = new sql.Request();
        request.input( 'JefeVenta',req.body.selectedJefeVenta);
        request.input( 'IdRelacion',req.body.id);
        request.execute("GetVendedorAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getJefeVenta: function(req,res){
        var request = new sql.Request(); 
        request.execute("GetJefeVentaAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getRelaciones: function(req,res){
        var request = new sql.Request();
        request.input( 'JefeVenta',req.body.codVended);
        request.execute("GetRelaciones", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    insertOrUpdateRelacion: function(req,res){
        var request = new sql.Request();
        
        request.input( 'ID', req.body.object.id);        
        request.input( 'JefeVenta',req.body.object.selectedJefeVenta);
        request.input( 'Vendedor',req.body.object.selectedVended);
        request.input( 'Baja',req.body.object.baja);
        request.execute("InsertOrUpdateRelacion", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

};

module.exports = vendorsController;