'use strict'

const sql = require("mssql");
const Sequelize = require("sequelize");
var app = require('./app');
var port = 5000;

// config for your database
var config = {
    user: 'sa',
    password: 'mcarcamo',
    server: 'LAPTOP-464JHAIR',
    database: 'OMSA',
    requestTimeout: -1
};

// connect to your database
sql.Promise = global.Promise;
sql.connect(config)
    .then(() => {
        console.log('Conexion a base de datos establecida exitosamente..');
    })
    .catch(err => console.log(err));

const sequelize = new Sequelize('OMSA', 'sa', 'mcarcamo', {
    host: 'LAPTOP-464JHAIR',
    dialect: 'mssql'
});


async function init() {
    //await assertDatabaseConnectionOk();

    //console.log(`Starting Sequelize + Express on port ${port}...`);

    app.listen(port, () => {
        console.log(`Express server started on port ${port}.`);
    });
}

init();