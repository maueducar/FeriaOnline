const Sequelize = require("sequelize");
const sequelize = new Sequelize('OMSA', 'sa', 'mcarcamo', {
    host: 'LAPTOP-464JHAIR',
    dialect: 'mssql'
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.vcClient = require('../models/vcClient')(db.sequelize, db.Sequelize);
db.ventaPlanComision = require('../models/VentaPlanComision')(db.sequelize, db.Sequelize);
db.ventaPlanComisionDetalle = require('../models/VentaPlanComisionDetalle')(db.sequelize, db.Sequelize);
db.ventaPlanComisionBaja = require('../models/VentaPlanComisionBaja')(db.sequelize, db.Sequelize);
db.ventaPlanComisionAplicacionBaja = require('../models/VentaPlanComisionAplicacionBaja')(db.sequelize, db.Sequelize);

module.exports = db;