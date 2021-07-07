'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');
var ReportsController = require('../controllers/reports');
var ConceptsController = require('../controllers/concepts');
var VendorsController = require('../controllers/vendors');
var Comisiones = require('../controllers/comisiones');

var router = express.Router();

router.post('/auth',ProjectController.decrypt,ProjectController.autenticate);
router.post('/userInsertOrUpdate',ProjectController.verifyToken,ProjectController.userInsertOrUpdate);
router.get('/getClients/:id',ProjectController.verifyToken,ReportsController.getClients);

router.get('/getGastos/:ano/:mes',ProjectController.verifyToken,ReportsController.getGastos);
router.get('/getDetalleGastos/:mes/:ano/:cuentaContable/:concepto',ProjectController.verifyToken,ReportsController.getDetalleGastos);
router.get('/getDetalleGastos/:mes/:ano/:cuentaContable',ProjectController.verifyToken,ReportsController.getDetalleGastos);

router.get('/getIngresos/:ano/:mes',ProjectController.verifyToken,ReportsController.getIngresos);
router.get('/getEnviosCobranza/:ano/:mes',ProjectController.verifyToken,ReportsController.getEnviosCobranza);

router.post('/getConceptosByFilters',ProjectController.verifyToken,ConceptsController.getConceptosByFilters);
router.post('/getConceptsAll',ProjectController.verifyToken,ConceptsController.getConceptsAll);
router.post('/getConceptoByID',ProjectController.verifyToken,ConceptsController.getConceptByID);
router.post('/getDetConceptsAll',ProjectController.verifyToken,ConceptsController.getDetConceptsAll);
router.post('/insertOrUpdateConcept',ProjectController.verifyToken,ConceptsController.insertOrUpdateConcept);

router.post('/getRubroByID',ProjectController.verifyToken,ConceptsController.getRubroByID);
router.post('/getRubrosAll',ProjectController.verifyToken,ConceptsController.getRubrosAll);
router.post('/getDetRubrosAll',ProjectController.verifyToken,ConceptsController.getDetRubrosAll);
router.post('/insertOrUpdateRubro',ProjectController.verifyToken,ConceptsController.insertOrUpdateRubro);

router.post('/getSubRubroByID',ProjectController.verifyToken,ConceptsController.getSubRubroByID);
router.post('/getSubRubrosByFilters',ProjectController.verifyToken,ConceptsController.getSubRubrosByFilters);
router.post('/getDetSubRubrosAll',ProjectController.verifyToken,ConceptsController.getDetSubRubrosAll);
router.post('/getSubRubrosAll',ProjectController.verifyToken,ConceptsController.getSubRubrosAll);
router.post('/insertOrUpdateSubRubro',ProjectController.verifyToken,ConceptsController.insertOrUpdateSubRubro);

router.post('/getTipoConceptoByID',ProjectController.verifyToken,ConceptsController.getTipoConceptoByID);
router.post('/getTiposConceptosAll',ProjectController.verifyToken,ConceptsController.getTiposConceptosAll);
router.post('/getTiposConceptosByRubro',ProjectController.verifyToken,ConceptsController.getTiposConceptosByRubro);
router.post('/getDetTipoConceptosAll',ProjectController.verifyToken,ConceptsController.getDetTipoConceptosAll);
router.post('/insertOrUpdateTipoConcepto',ProjectController.verifyToken,ConceptsController.insertOrUpdateTipoConcepto);

router.post('/insertOrUpdateDetCostoTipCon',ProjectController.verifyToken,ConceptsController.insertOrUpdateDetCostoTipCon);
router.post('/getPrestacionesByTipConcepto',ProjectController.verifyToken,ConceptsController.getPrestacionesByTipConcepto);
router.post('/getDetPrestacionesByPrestacionID',ProjectController.verifyToken,ConceptsController.getDetPrestacionesPrestacionID);
router.post('/insertOrUpdateDetPrestacion',ProjectController.verifyToken,ConceptsController.insertOrUpdateDetPrestacion);
router.post('/getDetPrestacion',ProjectController.verifyToken,ConceptsController.getDetPrestacion);

router.post('/getDatosCalculo',ProjectController.verifyToken,ConceptsController.getDatosCalculo);

router.post('/getCalculoAliases',ProjectController.verifyToken,ConceptsController.getCalculoAliases);

router.post('/getCalculoImporte',ProjectController.verifyToken,ConceptsController.getCalculoImporte);

router.post('/getCalculoConceptos',ProjectController.verifyToken,ConceptsController.getCalculoConceptos);
router.post('/updatePricesConcepts',ProjectController.verifyToken,ConceptsController.updatePricesConcepts);

router.post('/getDescuentoAntiguedadByFilter',ProjectController.verifyToken,ConceptsController.getDescuentoAntiguedadByFilter);
router.post('/updateDescuentoAntiguedad',ProjectController.verifyToken,ConceptsController.updateDescuentoAntiguedad);

router.post('/getCalculoClientes',ProjectController.verifyToken,ConceptsController.getCalculoClientes);
router.post('/updateClientPrices',ProjectController.verifyToken,ConceptsController.updateClientPrices);

router.post('/getCalculoFormulas',ProjectController.verifyToken,ConceptsController.getCalculoFormulas);
router.post('/datosFormulaInsertOrUpdate',ProjectController.verifyToken,ConceptsController.datosFormulaInsertOrUpdate);

router.post('/vendors/getJefeVentaAll',ProjectController.verifyToken,VendorsController.getJefeVenta);
router.post('/vendors/getVendedorAll',ProjectController.verifyToken,VendorsController.getVendedor);
router.post('/vendors/getRelaciones',ProjectController.verifyToken,VendorsController.getRelaciones);
router.post('/vendors/insertOrUpdateRelacion',ProjectController.verifyToken,VendorsController.insertOrUpdateRelacion);

router.post('/comisiones/save',ProjectController.verifyToken,Comisiones.save);
router.post('/comisiones/getPlanesComision',ProjectController.verifyToken,Comisiones.getPlanesComision);
router.post('/comisiones/getPlanesComisionDetalle',ProjectController.verifyToken,Comisiones.getPlanesComisionDetalle);
router.post('/comisiones/getPlanComisionVendedor',ProjectController.verifyToken,Comisiones.getPlanComisionVendedor);
router.post('/comisiones/insertOrUpdatePlanComisionVendedor',ProjectController.verifyToken,Comisiones.insertOrUpdatePlanComisionVendedor);
router.post('/comisiones/ventasVendedorPlanComision',ProjectController.verifyToken,Comisiones.ventasVendedorPlanComision);
router.post('/comisiones/ventasVendedorPlanComisionBajas',ProjectController.verifyToken,Comisiones.ventasVendedorPlanComisionBajas);
router.post('/comisiones/insertOrUpdateComisionVendedor',ProjectController.verifyToken,Comisiones.insertOrUpdateComisionVendedor);

module.exports = router;