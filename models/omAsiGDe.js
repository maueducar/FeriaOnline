const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiGDe', {
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    TipCompro: {
      type: DataTypes.STRING(6),
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
    NumAsient: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisNivInt: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ImpDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpSaldo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpReExpr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCotPar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesPartic: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    RefAltern: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'omAsiGDe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oAsGDe",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xComprobante_oAsGDe",
        fields: [
          { name: "TipCompro" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xDescripcion_oAsGDe",
        fields: [
          { name: "IdCompro" },
          { name: "DesPartic" },
        ]
      },
      {
        name: "xIdCompro_oAsGDe",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xIdDebHabCta",
        fields: [
          { name: "IdCompro" },
          { name: "DebeHaber" },
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xIdeRegAsi",
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xRefAlt_DebHab",
        fields: [
          { name: "IdCompro" },
          { name: "RefAltern" },
        ]
      },
      {
        name: "xTrans_DH_Cuenta",
        fields: [
          { name: "VisTransa" },
          { name: "DebeHaber" },
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
