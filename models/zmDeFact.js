const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zmDeFact', {
    CodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodMata: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EntSal: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    NroTropa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroPieza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodClasif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTipCua: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    KgCaliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgFrio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PrUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroSalCamara: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'zmDeFact',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCentroStock_zDeFa",
        fields: [
          { name: "CodCenSto" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xClasifHacienda_zDeFa",
        fields: [
          { name: "CodClasif" },
        ]
      },
      {
        name: "xCodTipoCuarto_zDeFa",
        fields: [
          { name: "CodTipCua" },
        ]
      },
      {
        name: "xIdCompro_zDeFa",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xMatadero_zDeFa",
        fields: [
          { name: "CodMata" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xNroComprob_zDeFa",
        fields: [
          { name: "CodComprob" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNroTropa_zDeFa",
        fields: [
          { name: "NroTropa" },
        ]
      },
      {
        name: "xTropPiezCuarto_zDeFa",
        fields: [
          { name: "NroTropa" },
          { name: "NroPieza" },
          { name: "CodTipCua" },
        ]
      },
    ]
  });
};
