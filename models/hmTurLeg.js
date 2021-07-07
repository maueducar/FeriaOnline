const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmTurLeg', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTurnoPredet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumPerInicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PredetTemp: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    VigDesFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VigHasFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hmTurLeg',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegajo_hLeTu",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "Orden" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_hLeTu",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
