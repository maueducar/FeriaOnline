'use strict'
//const { mode } = require('crypto-js');
const sql = require('mssql');
//const { ventaPlanComisionDetalle } = require('../models/');
//const sequelize = require('sequelize');
const db = require('../models/');
const VentaPlanComision = require('../models/VentaPlanComision');
const VentaPlanComisionDetalle = require('../models/VentaPlanComisionDetalle');
const reportsController = require('./reports');
//const VentaPlanComisionBaja = require('../models/VentaPlanComisionBaja');


var comisionesController = {
    save: function(req, res) {
        var request2 = new sql.Request();
        req.body.detalle.map(d => {
            var request = new sql.Request();

            request.input('PlanComisionID', req.body.plan.ID);
            request.input('PlanDescripcion', req.body.plan.PlanDescripcion);
            request.input('PlanTipoCalculo', req.body.plan.TipoCalculo);
            request.input('CalculoSubordinados', req.body.plan.CalculaSubordinados);
            request.input('PlanComisionBaja', req.body.plan.Baja);
            request.input('Identity', req.body.plan.Identity);
            request.input('PlanComisionDetalleID', d.PlanComisionDetalleID);
            request.input('MontoDesde', d.MontoDesde);
            request.input('MontoHasta', d.MontoHasta);
            request.input('MontoPremio', d.MontoPremio);
            request.input('PorcentajePremio', d.PorcentajePremio);
            request.input('DetalleBaja', d.DetalleBaja);
            request.execute("InsertOrUpdatePlanComision", function(err, recordset) {
                if (err) res.status(500).send({ message: 'Error en consulta' + err });
                if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
                recordset.recordset.map(r => {
                    request.parameters.PlanComisionID = r.PlanComisionID;
                });
            });
        });

        request2.input('Identity', req.body.plan.Identity);
        request2.execute("getPlanComision", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });

    },

    getPlanesComision: function(req, res) {
        var request = new sql.Request();
        request.execute("getPlanesComision", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });
    },

    getPlanComisionVendedor: function(req, res) {
        var request = new sql.Request();
        request.input('PlanComisionID', req.body.PlanComisionID);
        request.execute("getPlanComisionVendedor", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });
    },

    getPlanesComisionDetalle: function(req, res) {
        var request = new sql.Request();
        request.input("PlanComisionID", req.body.PlanComisionID);
        request.input("Identity", req.body.Identity);
        request.execute("getPlanesComisionDetalle", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });
    },

    insertOrUpdatePlanComisionVendedor: function(req, res) {
        //var transaction = new sql.Transaction(dbConn);
        //transaction.begin().then(function () {
        var request2 = new sql.Request();
        request2.input('PlanComisionID', req.body.PlanComisionID);
        request2.execute("deletePlanComision", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
        });


        req.body.Plan.map(d => {
            var request = new sql.Request();
            request.input('PlanComisionID', req.body.PlanComisionID);
            request.input('CodVended', d.CodVended);
            request.execute("insertOrUpdatePlanComisionVendedor", function(err, recordset) {
                if (err) res.status(500).send({ message: 'Error en consulta' + err });
                if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            });
        });


        var request3 = new sql.Request();
        request3.input('PlanComisionID', req.body.PlanComisionID);
        request3.execute("getPlanComisionVendedor", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });

        /*}).catch(function (err) {
            console.log(err);
            res.status(500).send({message: "Error in Transaction Begin " + err});
        });*/
    },

    ventasVendedorPlanComision: function(req, res) {
        var request = new sql.Request();

        request.input("CodVended", req.body.CodVended);
        request.input("Fecha", req.body.Fecha);
        request.execute("ventasVendedorPlanComision", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });
    },

    ventasVendedorPlanComisionBajas: function(req, res) {
        var request = new sql.Request();

        request.input("CodVended", req.body.CodVended);
        request.input("Fecha", req.body.Fecha);
        request.execute("ventasVendedorPlanComisionBajas", function(err, recordset) {
            if (err) res.status(500).send({ message: 'Error en consulta' + err });
            if (!recordset) res.status(404).send({ message: 'No se encontraron registros' });
            res.send(recordset.recordset);
        });
    },

    insertOrUpdateComisionVendedor: async function(req, res) {
        var comisiones = req.body.Comisiones;

        if (!comisiones) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        const result = await comisionesController.grabarVendedores_sp(comisiones);
        //console.log(result);
        res.status(200).send(result);
    },

    grabarVendedores_sp: async function(comisiones) {
        return new Promise(async(resolve, reject) => {
            var self = this;
            self.ventas = [];
            Promise.all(
                    comisiones.vendedores.map(async(vendedor) => {
                        var request = new sql.Request();
                        request.input('PlanComisionVendedorID', comisiones.planComisionID);
                        request.input('CodVended', vendedor.CodVended);
                        request.input('Periodo', comisiones.fecha);
                        request.input('Usuario', '');
                        request.input('TotalComision', 0);
                        request.input('TotalBajas', 0);
                        let ret = await request.execute("InsertVentaPlanComision")
                            .then(recordset => {
                                //if (err) return err;
                                if (!recordset) return 'No se encontraron registros';

                                const ventaPlanComision = {
                                    VentaPlanComisionID: 0,
                                    PlanComisionVendedorID: comisiones.planComisionID,
                                    CodVended: vendedor.CodVended,
                                    CodCliente: 0,
                                    Periodo: comisiones.fecha,
                                    EstadoID: 1,
                                    Baja: false,
                                    Usuario: '',
                                    FechaProcesamiento: new Date(),
                                    TotalComision: 0,
                                    TotalBajas: 0,
                                    ventas: [],
                                    bajas: []
                                };

                                ventaPlanComision.VentaPlanComisionID = recordset.recordset[0].id;

                                let comision = ventaPlanComision

                                return JSON.parse(JSON.stringify(comision))

                            })

                        ret.ventas = await this.insertVentas_sp(vendedor.ventas, ret.VentaPlanComisionID);

                        ret.bajas = await this.insertBajas_sp(vendedor.bajas, ret.VentaPlanComisionID);

                        if (vendedor.aplicaciones) ret.aplicaciones = await this.insertAplicaciones_sp(vendedor.aplicaciones, ret.VentaPlanComisionID);

                        self.ventas.push(ret);

                        return self.ventas;
                    })
                )
                .then(result => {
                    resolve(self.ventas);
                })
                .catch(reject => {
                    console.log('reject');
                    throw reject;
                })
        });
    },

    async insertVentas_sp(ventas, id) {
        return new Promise(async(resolve, reject) => {
            var self = this;
            self.result = [];

            await Promise.all(ventas.map(async v => {
                    var request = new sql.Request();
                    request.input('VentaPlanComisionID', id);
                    request.input('Venta', v.venta);
                    request.input('Cierre', v.cierre);
                    request.input('Enviado', v.enviado);
                    request.input('Cobrado1', v.cobrado1);
                    request.input('Cobrado2', v.cobrado2);
                    request.input('Comentario', v.Comentario);
                    request.input('Aplicado', v.aplicado);
                    request.input('Selected', v.select);
                    request.input('Baja', false);
                    request.input('CodCliente', v.CodCliente);
                    request.input('Usuario', '');
                    let ret = await request.execute("InsertVentaPlanComisionDetalle")
                        .then(recordset => {

                            if (!v.select) v.select = false;
                            if (!v.Enviado) v.Enviado = 0;
                            if (!v.Cobrado1) v.Cobrado1 = 0;
                            if (!v.cobrado2) v.cobrado2 = 0;
                            let ventaPlanComisionDetalle = {
                                VentaPlanComisionDetalleID: 0,
                                VentaPlanComisionID: id,
                                Venta: v.venta,
                                Cierre: v.cierre,
                                Enviado: v.enviado,
                                Cobrado1: v.cobrado1,
                                Cobrado2: v.cobrado2,
                                Comentario: v.Comentario,
                                Aplicado: v.aplicado,
                                Selected: v.select,
                                Baja: false,
                                CodCliente: v.CodCliente,
                                Usuario: ''
                            }

                            ventaPlanComisionDetalle.VentaPlanComisionDetalleID = recordset.recordset[0].id;
                            return ventaPlanComisionDetalle;
                        });
                    self.result.push(ret);
                }))
                .then(() => {
                    resolve(self.result);
                })
                .catch(reject => {
                    console.log('reject');
                    throw reject;
                });
        })
    },

    async insertBajas_sp(ventas, id) {
        return new Promise(async(resolve, reject) => {
            var self = this;
            self.result = [];

            await Promise.all(ventas.map(async v => {
                    var request = new sql.Request();
                    request.input('VentaPlanComisionID', id);
                    request.input('Venta', v.venta);
                    request.input('Cierre', v.cierre);
                    request.input('Enviado', v.enviado);
                    request.input('Cobrado1', v.cobrado1);
                    request.input('Cobrado2', v.cobrado2);
                    request.input('Comentario', v.Comentario);
                    request.input('Aplicado', v.aplicado);
                    request.input('Selected', v.select);
                    request.input('Baja', false);
                    request.input('CodCliente', v.CodCliente);
                    request.input('Usuario', '');
                    let ret = await request.execute("InsertVentaPlanComisionBaja")
                        .then(recordset => {

                            if (!v.select) v.select = false;
                            if (!v.Enviado) v.Enviado = 0;
                            if (!v.Cobrado1) v.Cobrado1 = 0;
                            if (!v.cobrado2) v.cobrado2 = 0;
                            let ventaPlanComisionBaja = {
                                VentaPlanComisionDetalleID: 0,
                                VentaPlanComisionID: id,
                                Venta: v.venta,
                                Cierre: v.cierre,
                                Enviado: v.enviado,
                                Cobrado1: v.cobrado1,
                                Cobrado2: v.cobrado2,
                                Comentario: v.Comentario,
                                Aplicado: v.aplicado,
                                Selected: v.select,
                                Baja: false,
                                CodCliente: v.CodCliente,
                                Usuario: ''
                            }

                            ventaPlanComisionBaja.VentaPlanComisionDetalleID = recordset.recordset[0].id;
                            console.log(ventaPlanComisionBaja);
                            return ventaPlanComisionBaja;
                        });
                    self.result.push(ret);
                }))
                .then(() => {
                    resolve(self.result);
                })
                .catch(reject => {
                    console.log('reject');
                    throw reject;
                });
        })
    },

    async insertAplicaciones_sp(aplicaciones, id) {
        return new Promise(async(resolve, reject) => {
            var self = this;
            self.aplicaciones = [];

            await Promise.all(aplicaciones.map(async a => {

                    var request = new sql.Request();
                    request.input('VentaPlanComisionID', id);
                    request.input('ClienteBaja', a.ClienteBaja);
                    request.input('ClienteVenta', a.ClienteVenta);
                    request.input('ImpAplicado', a.ImAplicado);
                    request.input('ImpBaja', a.ImpBaja);
                    request.input('ImpVenta', a.ImpVenta);
                    let ret = await request.execute("InsertAplicacionComisionBaja")
                        .then(recordset => {
                            let ventaPlanComisionAplicacionBaja = {
                                VentaPlanComisionAplicacionBajaID: 0,
                                VentaPlanComisionID: id,
                                ClienteBaja: a.ClienteBaja,
                                ClienteVenta: a.ClienteVenta,
                                ImpAplicado: a.ImAplicado,
                                ImpBaja: a.ImpBaja,
                                ImpVenta: a.ImpVenta
                            }
                            ventaPlanComisionAplicacionBaja.VentaPlanComisionAplicacionBajaID = recordset.recordset[0].id;
                            return ventaPlanComisionAplicacionBaja;
                        });

                    self.aplicaciones.push(ret);
                }))
                .then(() => {
                    resolve(self.aplicaciones);
                })
                .catch(reject => {
                    console.log('reject');
                    throw reject;
                });
        })
    },

    grabarVendedores: async function(comisiones) {
        var self = this;
        self.ventas = [];
        var result = [];
        await Promise.all(comisiones.vendedores.map(async(vendedor, i) => {
                const ventaPlanComision = {
                    PlanComisionVendedorID: comisiones.planComisionID,
                    CodVended: vendedor.CodVended,
                    CodCliente: 1505,
                    Periodo: comisiones.fecha,
                    EstadoID: 1,
                    Baja: false,
                    Usuario: '',
                    FechaProcesamiento: new Date(),
                    TotalComision: 0,
                    TotalBajas: 0,
                    ventas: [],
                    bajas: []
                };
                let comision = await db.ventaPlanComision.create(ventaPlanComision);
                comision.dataValues.ventas = await this.insertVentas(vendedor.ventas, comision.dataValues.VentaPlanComisionID);
                comision.dataValues.bajas = await this.insertBajas(vendedor.bajas, comision.dataValues.VentaPlanComisionID);
                if (vendedor.aplicaciones) comision.dataValues.aplicaciones = await this.insertAplicaciones(vendedor.aplicaciones, comision.dataValues.VentaPlanComisionID);

                self.ventas.push(
                    JSON.parse(JSON.stringify(comision.dataValues))
                );
                // console.log(vendedor.aplicaciones);
            }))
            .then(result => {
                return true;
            });
        return self.ventas;
    },




    async insertVentas(ventas, id) {
        var self = this;
        self.result = [];

        await Promise.all(ventas.map(async v => {
                if (!v.select) v.select = false;
                if (!v.Enviado) v.Enviado = 0;
                if (!v.Cobrado1) v.Cobrado1 = 0;
                if (!v.cobrado2) v.cobrado2 = 0;
                const ventaPlanComisionDetalle = {
                    VentaPlanComisionID: id,
                    Venta: v.venta,
                    Cierre: v.cierre,
                    Enviado: v.enviado,
                    Cobrado1: v.cobrado1,
                    Cobrado2: v.cobrado2,
                    Comentario: v.Comentario,
                    Aplicado: v.aplicado,
                    Selected: v.select,
                    Baja: false,
                    CodCliente: v.CodCliente,
                    Usuario: 'Mec'
                }
                var ventaPlanComisionDetalleAux = await db.ventaPlanComisionDetalle.create(ventaPlanComisionDetalle);
                self.result.push(ventaPlanComisionDetalleAux.dataValues);
            }))
            .then(() => {
                return self.result;
            })


        return self.result;
    },

    async insertBajas(bajas, id) {
        var self = this;
        self.result = [];
        await Promise.all(bajas.map(async v => {
                if (!v.select) v.select = false;
                if (!v.Enviado) v.Enviado = 0;
                if (!v.Cobrado1) v.Cobrado1 = 0;
                if (!v.cobrado2) v.cobrado2 = 0;
                const ventaPlanComisionBaja = {
                    VentaPlanComisionID: id,
                    Venta: v.venta,
                    Cierre: v.cierre,
                    Enviado: v.enviado,
                    Cobrado1: v.cobrado1,
                    Cobrado2: v.cobrado2,
                    Comentario: v.Comentario,
                    Aplicado: v.aplicado,
                    Selected: v.select,
                    Baja: true,
                    CodCliente: v.CodCliente,
                    Usuario: 'Mec'
                }
                var ventaPlanComisionBajaAux = await db.ventaPlanComisionBaja.create(ventaPlanComisionBaja);
                //db.sequelize.close();
                self.result.push(await ventaPlanComisionBajaAux.dataValues);
            }))
            .then(() => {
                return self.result;
            })

        return self.result;
    },

    async insertAplicaciones(aplicaciones, id) {
        var self = this;
        self.aplicaciones = [];

        await Promise.all(aplicaciones.map(async a => {
                const ventaPlanComisionAplicacionBaja = {
                    VentaPlanComisionID: id,
                    ClienteBaja: a.ClienteBaja,
                    ClienteVenta: a.ClienteVenta,
                    ImpAplicado: a.ImAplicado,
                    ImpBaja: a.ImpBaja,
                    ImpVenta: a.ImpVenta
                }

                var ventaPlanComisionAplicacionBajaAux = await db.ventaPlanComisionAplicacionBaja.create(ventaPlanComisionAplicacionBaja);
                self.aplicaciones.push(ventaPlanComisionAplicacionBajaAux.dataValues);
            }))
            .then(() => {
                return self.aplicaciones;
            })


        return self.aplicaciones;
    }

};

module.exports = comisionesController;