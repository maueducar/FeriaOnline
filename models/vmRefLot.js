const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmRefLot', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FechaInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraInicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaCierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Impresiones: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cerrado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmRefLot',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorNroLote_vReLo",
        unique: true,
        fields: [
          { name: "CodSucurs", order: "DESC" },
          { name: "CodPunVen", order: "DESC" },
          { name: "NroLote", order: "DESC" },
        ]
      },
      {
        name: "xEstadoDeCierre_vReLo",
        fields: [
          { name: "Cerrado" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLote" },
        ]
      },
    ]
  });
};
