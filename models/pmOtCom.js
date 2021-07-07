const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmOtCom', {
    NumOT: {
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
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NumSerie: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    NumPartida: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEmision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanNecesaria: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanEntregada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPCalculado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPManual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPVariado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoReg: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCenStoOri: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitFinales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilFinales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoCompEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Envasado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PasProdTerOk: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PasProdTerUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    PasProdTerFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PasProdTerHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenStoPT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsComentario: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Comentario: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TipoAjuste: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pmOtCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodArticu_pOtSt",
        fields: [
          { name: "CodArticu" },
          { name: "FecEmision" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xCodArticu_pOtSt_2",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xIdCompEnvas_pOtSt",
        fields: [
          { name: "IdCompEnva" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xNumOT_IdReg",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNumOT_pOtSt",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "TipoReg" },
          { name: "NumOrden" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xPorNumOT_potSt_2",
        fields: [
          { name: "NumOT" },
        ]
      },
    ]
  });
};
