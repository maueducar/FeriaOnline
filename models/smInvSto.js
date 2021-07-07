const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smInvSto', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenLot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComSto: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumPartida: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NumSerie: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    UniInventario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniExistencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniDiferencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Ajustar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Ajustado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CanBultos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUniNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUniFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DerivPorDef: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CabDeDef: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'smInvSto',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtiCentStock_sInSo",
        fields: [
          { name: "CodArticu" },
          { name: "CodCenSto" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xArticulo_sInSo",
        fields: [
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xCentroDeStock_sInSo",
        fields: [
          { name: "CodCenSto" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xComprobante_sInSo",
        fields: [
          { name: "CodTalona" },
          { name: "CodComSto" },
          { name: "VisCompro" },
          { name: "IdCompro" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xIdComprob_sInSo",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIdComproIdReg__sInSo",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xLoteDeComp_sInSo",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVenLot" },
          { name: "NumLote" },
          { name: "CodComSto" },
          { name: "VisCompro" },
        ]
      },
      {
        name: "xNumOT_sInSo",
        fields: [
          { name: "NumOT" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
    ]
  });
};
