const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AUXvaComVen', {
    IDLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      autoIncrement: true
    },
    FechaGen: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Usuario: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    Periodo: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CodVended: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    ObjetivoVenta: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    PorComision: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TotVenta: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TotFacturado: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TotComision: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    TotImput: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AUXvaComVen',
    schema: 'dbo',
    timestamps: false
  });
};
