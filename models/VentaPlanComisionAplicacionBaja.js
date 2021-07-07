const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VentaPlanComisionAplicacionBaja', {
    VentaPlanComisionAplicacionBajaID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    VentaPlanComisionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClienteBaja: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ClienteVenta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ImpAplicado: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ImpBaja: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ImpVenta: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VentaPlanComisionAplicacionBaja',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_VentaPlanComisionAplicacionBaja",
        unique: true,
        fields: [
          { name: "VentaPlanComisionAplicacionBajaID" },
        ]
      },
    ]
  });
};
