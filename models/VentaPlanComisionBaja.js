const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('VentaPlanComisionBaja', {
        VentaPlanComisionBajaID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        VentaPlanComisionID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Venta: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Cierre: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Enviado: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Cobrado1: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Cobrado2: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Comentario: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        Aplicado: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        Selected: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        Baja: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        CodCliente: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Usuario: {
            type: DataTypes.STRING(50),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'VentaPlanComisionBaja',
        schema: 'dbo',
        timestamps: false,
        indexes: [{
            name: "PK_VentaPlanComisionBaja",
            unique: true,
            fields: [
                { name: "VentaPlanComisionBajaID" },
            ]
        }, ]
    });
};