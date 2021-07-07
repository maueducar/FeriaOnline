'use strict'
var sql = require('mssql');
var util = require('util');

var  conceptosController = {

    getPrestacionesByTipConcepto: function(req,res){         
        var request = new sql.Request();
        request.query("Select p.PrestacionID,p.CodTipConcepto, p.Descripcion,sum(dp.Importe) TotalPlan, sum(dp.Importe)*0.011 CostoPlan " +
        " from Prestacion p " +
        " left join DetPrestacion dp on dp.PrestacionID = p.PrestacionID " +
        " Where p.CodTipConcepto = " + req.body.codTipConcepto +
        " group by p.PrestacionID,p.CodTipConcepto, p.Descripcion", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getDetPrestacionesPrestacionID: function(req,res){         
        var request = new sql.Request();
        request.query("select vccf.CodConFac,vccf.Concepto,coalesce(dp.PrestacionID,0) PrestacionID, coalesce(Importe,0.00) Importe " +
                      "from vcconfac vccf " +
                      "LEFT join DetPrestacion dp on dp.CodConFac = vccf.CodConFac AND dp.PrestacionID = " + + req.body.prestacionID +
                      "where vccf.codSubrub = 9999 " +
                       "and codRubro = " + req.body.codRubro, function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getConceptosByFilters: function(req,res){
        var codRubro = req.body.object.rubroSelected;
        var codSubRub = req.body.object.subRubroSelected;
        var codTipConcepto = req.body.object.tipoConceptoSelected;
        var filtrarPorTipo = req.body.object.filtrarPorTipo;
         
        var request = new sql.Request();
        request.input('CodRubro',codRubro);
        request.input('CodSubRubro',codSubRub);
        request.input('CodTipConcepto',codTipConcepto);
        request.input('FoltrarTipo',filtrarPorTipo);
        
        request.execute("GetConcetosByFilters", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getRubrosAll: function(req,res){
         // create Request object
        var request = new sql.Request();

        request.execute("GetRubrosAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getSubRubrosByFilters: function(req,res){ 
        var request = new sql.Request();
        request.input( 'CodRubro',req.body.codRubro);
        request.execute("GetSubRubrosByFilters", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getSubRubrosAll: function(req,res){ 
        var request = new sql.Request();
        request.execute("GetSubRubrosAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getTiposConceptosAll: function(req,res){
        var request = new sql.Request();
        request.execute('GetTiposConceptosAll',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getTiposConceptosByRubro: function(req,res){
        var request = new sql.Request();
        console.log(  req.body.codRubro != undefined? req.body.codRubro: req.body.object.codRubro);
        request.input( 'CodRubro',req.body.codRubro != undefined? req.body.codRubro: req.body.object.codRubro);
        request.execute('GetTiposConceptosByRubro',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getConceptsAll: function(req,res){
         
        var request = new sql.Request();
        
        request.execute("GetConceptsAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getConceptByID: function(req,res){
        var request = new sql.Request();
        request.input( 'codConfac',req.body.object);
        request.execute("GetConceptByID", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset[0]);    
        });
    },

    getRubroByID: function(req,res){
        var request = new sql.Request();
        request.input( 'codRubro',req.body.object);
        request.execute("GetRubroByID", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset[0]);    
        });
    },

    getSubRubroByID: function(req,res){
        var request = new sql.Request();
        request.input( 'codSubRub',req.body.object);
        request.execute("GetSubRubroByID", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset[0]);    
        });
    },

    getTipoConceptoByID: function(req,res){
        var request = new sql.Request();
        request.input( 'codTipConcepto',req.body.object);
        request.execute("GetTipoConceptoByID", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset[0]);    
        });
    },

    insertOrUpdateConcept: function(req,res){
        var request = new sql.Request();
        request.input( 'Concepto',req.body.object.concepto);
        request.input( 'CodConfac',req.body.object.conceptoSelected);
        request.input( 'CodRubro',req.body.object.rubroSelected);
        request.input( 'CodSubRub',req.body.object.subRubroSelected);
        request.input( 'CodTipConcepto',req.body.object.tipoConceptoSelected);
        request.input( 'PreUnitario',req.body.object.preUnitario);
        request.execute("InsertOrUpdateConcept", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset[0]);    
        });
    },


    insertOrUpdateRubro: function(req,res){
        var request = new sql.Request();
        request.input( 'CodRubro',req.body.object.rubroSelected);
        request.input( 'Descripcion',req.body.object.descripcion);
        request.execute("InsertOrUpdateRubro", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    insertOrUpdateSubRubro: function(req,res){
        var request = new sql.Request();
        request.input( 'CodRubro',req.body.object.rubroSelected);
        request.input( 'CodSubRub',req.body.object.subRubroSelected);
        request.input( 'Descripcion',req.body.object.descripcion);
        request.execute("InsertOrUpdateSubRubro", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    insertOrUpdateTipoConcepto: function(req,res){
        var request = new sql.Request();
        
        request.input( 'CodTipConcepto',req.body.object.tipoConeptoSelected);
        request.input( 'DesConcepto',req.body.object.descripcion);
        request.input( 'CodRubro',req.body.object.rubroSelected);
        request.execute("InsertOrUpdateTipoConcepto", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getDetConceptsAll: function(req,res){
         
        var request = new sql.Request();
        
        request.input( 'CodRubro',req.body.object.rubroSelected);
        request.execute("GetDetConceptsAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getDetRubrosAll: function(req,res){
         
        var request = new sql.Request();
        
        request.execute("GetDetRubrosAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getDetSubRubrosAll: function(req,res){
         
        var request = new sql.Request();
        
        request.execute("GetDetSubRubrosAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getDetTipoConceptosAll: function(req,res){
         
        var request = new sql.Request();
        
        request.execute("GetDetTipoConceptosAll", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    getCalculoFormulas: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.codRubro)
        request.execute('getCalculoFormulas',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getCalculoAliases: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.codRubro)
        request.execute('getCalculoAliases',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getCalculoConceptos: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.codRubro)
        request.execute('getCalculoConceptos',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getCalculoImporte: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.codRubro)
        request.execute('getCalculoImporte',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getDatosCalculo: function(req,res){
        var request = new sql.Request();
        request.input("CodTipConcepto",req.body.TipoConceptoSelected)
        request.input("CodSubRub",req.body.SubRubroSelected)
        request.execute('getDatosCalculo',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },
    
    getCalculoClientes: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.rubroSelected);
        request.input("CodSubRub",req.body.subRubroSelected);
        request.input("CodTipConcepto",req.body.tipoConceptoSelected);
        request.input("CodConFac",req.body.conceptoSelected);
        request.input("Redondeo",req.body.Redondeo);
        request.input("Limite",req.body.Limite);
        request.input("Vigencia",req.body.Vigencia);
        request.input("Excluir",req.body.Excluir);
        request.input("ClienteDesde",req.body.ClienteDesde);
        request.input("ClienteHasta",req.body.ClienteHasta);
        request.execute('getCalculoClientes',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    updateClientPrices: function(req,res){
        var request = new sql.Request();
        request.input("CodRubro",req.body.rubroSelected);
        request.input("CodSubRub",req.body.subRubroSelected);
        request.input("CodTipConcepto",req.body.tipoConceptoSelected);
        request.input("CodConFac",req.body.conceptoSelected);
        request.input("Redondeo",req.body.Redondeo);
        request.input("Limite",req.body.Limite);
        request.input("Vigencia",req.body.Vigencia);
        request.input("Excluir",req.body.Excluir);
        request.input("ClienteDesde",req.body.ClienteDesde);
        request.input("ClienteHasta",req.body.ClienteHasta);
        request.execute('updateClientPrices',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    insertOrUpdateCabCostoTipCon: function(req,res){
        var request = new sql.Request();
        request.query("exec proc_pivotGastos null,'01/"+mes+"/"+ano+"',null,null", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },


    insertOrUpdateDetCostoTipCon: function(req,res){
        var request = new sql.Request();
        request.query("exec proc_pivotGastos null,'01/"+mes+"/"+ano+"',null,null", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },


    insertOrUpdateDetCostoTipCon: function(req,res){
        var request = new sql.Request();
        request.query("exec proc_pivotGastos null,'01/"+mes+"/"+ano+"',null,null", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });
    },

    updatePricesConcepts: function(req,res){
        var request = new sql.Request();
        request.execute("UpdatePricesConcepts", function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(true);    
        });
    },

    insertOrUpdateDetPrestacion: function(req,res){
        var prestaciones = req.body.prestacion;

        (async function () {
            try {
                    let result=await new sql.Request()
                    .input('PrestacionID',sql.Int,util.isNull(prestaciones.prestacion.PrestacionID)? 0: prestaciones.prestacion.PrestacionID)
                    .input('TipoConceltoID',sql.Int,prestaciones.prestacion.CodigoTipoConcepto)
                    .input('Descripcion',sql.VarChar,prestaciones.prestacion.Descripcion)
                    .input('Usuario',sql.VarChar,'admin')
                    .execute("insertOrUpdatePrestacion", function (err, recordset) {
                        if (err) res.status(500).send({message: 'Error en consulta' + err});
                        if (!recordset) res.status(404).send({message: 'No se encontraron registros' });       
                    })
            } catch (err) {
                if (err) res.status(500).send({message: 'Error en consulta' + err});
            }
        })()

        for(let element in prestaciones.detPrestacion){
            (async function () {
                try {
                        let result=await new sql.Request()
                        .input('PrestacionID',sql.Int,util.isNull(prestaciones.detPrestacion[element].PrestacionID)? 0: prestaciones.detPrestacion[element].PrestacionID)
                        .input('TipoConceltoID',sql.Int,req.body.tipoConceltoID)
                        .input('CodConFac',sql.Int,prestaciones.detPrestacion[element].CodConFac)
                        .input('Importe',sql.Float,util.isNull(prestaciones.detPrestacion[element].Importe)? 0:prestaciones.detPrestacion[element].Importe)
                        .input('Usuario',sql.VarChar,'admin')
                        .execute("insertOrUpdateDetPrestacion", function (err, recordset) {
                            if (err) res.status(500).send({message: 'Error en consulta' + err});
                            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });       
                        })
                } catch (err) {
                    if (err) res.status(500).send({message: 'Error en consulta' + err});
                }
            })()

        };

        let result=new sql.Request()
        .input('CodRubro',sql.Int,req.body.codRubro)
        .execute("GetDetPrestacion" , function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });    
    },
    
    getDetPrestacion: function(req,res){
        let result=new sql.Request()
        .input('CodRubro',sql.Int,req.body.codRubro)
        .execute("GetDetPrestacion" , function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });    
    },

    datosFormulaInsertOrUpdate: function(req,res){
        var request = new sql.Request();

        request.input("CodTipConcepto",req.body.tipoConceptoSelected);
        request.input("CodSubRub",req.body.subRubroSelected);
        request.input("CostoPlan",sql.Float,req.body.costoPlan);
        request.input("DescripionCalculo",req.body.descripcionCalculo);
        request.input("Alias",req.body.alias);
        request.input("Formula",req.body.formula);
        request.input("CodConFac",req.body.codConFac);
        request.input("Carencia",req.body.carencia);
        request.input("Usuario","Admin");
        request.execute('DatosFormulaInsertOrUpdate',function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },

    getDescuentoAntiguedadByFilter: function(req,res){
        var request = new sql.Request();

        request.input("Antiguedad",req.body.Antiguedad);
        request.execute("getDescuentoAntiguedadByFilter" , function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    },
    updateDescuentoAntiguedad: function(req,res){
        var request = new sql.Request();
        request.execute("updateDescuentoAntiguedad" , function (err, recordset) {
            if (err) res.status(500).send({message: 'Error en consulta' + err});
            if (!recordset) res.status(404).send({message: 'No se encontraron registros' });
            res.send(recordset.recordset);    
        });        
    }

};

module.exports = conceptosController;