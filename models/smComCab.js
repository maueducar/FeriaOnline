const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smComCab', {
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
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodComSto: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCompro: {
      type: DataTypes.DATE,
      allowNull: true
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
      defaultValue: "",
      primaryKey: true
    },
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacA_CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    FacA_LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    FacA_PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacA_NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacA_IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Anulado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenStoDest: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Audit_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ContIDdeDetalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ContadorIdReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.CHAR(7),
      allowNull: false,
      defaultValue: ""
    },
    Autoriza_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodUni: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Hskm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCodSubRub: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PerMulRegArticu: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    LimCodCatArticulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCodSeccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCodTipArticulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UsaLectorBarras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Concepto: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'smComCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCompNumero",
        unique: true,
        fields: [
          { name: "CodComSto" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCodComSto_sCoCa",
        fields: [
          { name: "CodComSto" },
        ]
      },
      {
        name: "xComprobante_sCoCa",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodComSto" },
          { name: "VisCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFactAsoc",
        fields: [
          { name: "FacA_CodDefCom" },
          { name: "FacA_LetCompro" },
          { name: "FacA_PunVenCom" },
          { name: "FacA_NumCompro" },
          { name: "FacA_IdCompro" },
        ]
      },
      {
        name: "xIdComprob_sCoCa",
        unique: true,
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNumero",
        fields: [
          { name: "CodTalona" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xNumLote_sCoCa",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
          { name: "CodComSto" },
          { name: "VisCompro" },
        ]
      },
      {
        name: "xNumLote_sCoCa_2",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xNumOT_sCoCa",
        fields: [
          { name: "NumOT" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
    ]
  });
};
