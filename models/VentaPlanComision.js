const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('VentaPlanComision', {
        VentaPlanComisionID: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        PlanComisionVendedorID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CodVended: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        Periodo: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        EstadoID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Baja: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        Usuario: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        FechaProcesamiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        TotalComision: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        TotalBajas: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'VentaPlanComision',
        schema: 'dbo',
        timestamps: false,
        indexes: [{
            name: "PK_VentaPlanComision",
            unique: true,
            fields: [
                { name: "VentaPlanComisionID" },
            ]
        }, ]
    });
};