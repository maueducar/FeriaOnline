const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('VentaPlanComisionDetalle', {
        VentaPlanComisionDetalleID: {
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
        tableName: 'VentaPlanComisionDetalle',
        schema: 'dbo',
        timestamps: false,
        indexes: [{
            name: "PK_VentaPlanComisionDetalle",
            unique: true,
            fields: [
                { name: "VentaPlanComisionDetalleID" },
            ]
        }, ]
    });
};