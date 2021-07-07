const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vtParGen', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecTrabajo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PunVenRemoto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PunVtaRegistradora: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoPunVen: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Aut_CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Aut_CodCtaEfectivo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Aut_CodCtaChe3: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    UltCalStockFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UltCalStockHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vtParGen',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IdReg_vPaGe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
