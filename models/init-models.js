var DataTypes = require("sequelize").DataTypes;
var _VentaPlanComisionAplicacionBaja = require("./VentaPlanComisionAplicacionBaja");

function initModels(sequelize) {
  var VentaPlanComisionAplicacionBaja = _VentaPlanComisionAplicacionBaja(sequelize, DataTypes);


  return {
    VentaPlanComisionAplicacionBaja,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
