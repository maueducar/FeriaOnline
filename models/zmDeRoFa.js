const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zmDeRoFa', {
    NumRomaneo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
      defaultValue: 0,
      primaryKey: true
    },
    NroPieza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodClasif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTipCua: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    MotivoIngreso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    MotivoEgreso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    IdDeCuarteo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    Otro_CodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Otro_LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Otro_PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Otro_NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Otro_IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Otro_VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroTropaCtrl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Marcado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'zmDeRoFa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCenStocYestado_zDeRF",
        fields: [
          { name: "CodCenSto" },
          { name: "MotivoEgreso" },
          { name: "Fecha" },
          { name: "NroTropa" },
          { name: "NroPieza" },
        ]
      },
      {
        name: "xClasifHacienda_zDeRF",
        fields: [
          { name: "CodClasif" },
        ]
      },
      {
        name: "xCodTipoCuarto_zDeRF",
        fields: [
          { name: "CodTipCua" },
        ]
      },
      {
        name: "xIDCuarteo_zDeRF",
        fields: [
          { name: "IdDeCuarteo" },
        ]
      },
      {
        name: "xMarcados_zDeRF",
        fields: [
          { name: "Marcado" },
        ]
      },
      {
        name: "xMatadero_zDeRF",
        fields: [
          { name: "CodMata" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xNroRomaneo_zDeRF",
        fields: [
          { name: "NumRomaneo" },
        ]
      },
      {
        name: "xNroTropa_zDeRF",
        fields: [
          { name: "NroTropa" },
        ]
      },
      {
        name: "xTropaCtrl_zDeRF",
        fields: [
          { name: "NroTropaCtrl" },
          { name: "NroTropa" },
          { name: "NroPieza" },
        ]
      },
      {
        name: "xTropaYPieza_zDeRF",
        fields: [
          { name: "NroTropa" },
          { name: "NroPieza" },
        ]
      },
      {
        name: "xTropaYPiezaYTipo_zDeRF",
        unique: true,
        fields: [
          { name: "NroTropa" },
          { name: "NroPieza" },
          { name: "CodTipCua" },
        ]
      },
    ]
  });
};
