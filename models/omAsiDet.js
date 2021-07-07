const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiDet', {
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
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
    OriModulo: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    OriCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoDeCompIVA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodCanCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiDet',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCenCos",
        fields: [
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xCenCosCueFec",
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCenCos" },
          { name: "CodCuenta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xCodArticu",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodCue_FecCon",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "FecContab" },
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xCodCuenta_oAsDe",
        fields: [
          { name: "CodCuenta" },
        ]
      },
      {
        name: "xEjerCueFecha",
        fields: [
          { name: "CodCarpeta" },
          { name: "CodCuenta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xIdCompro_oAsDe",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xMutual_oAsDe",
        fields: [
          { name: "CodMutual" },
          { name: "CodCarpeta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xPueTraCtaFecha",
        fields: [
          { name: "CodPueTrab" },
          { name: "CodCuenta" },
          { name: "CodCarpeta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xSucCtaFecha",
        fields: [
          { name: "CodSucurs" },
          { name: "CodCuenta" },
          { name: "CodCarpeta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xTarjeta_oAsDe",
        fields: [
          { name: "CodEmpTarjeta" },
          { name: "CodCarpeta" },
          { name: "FecContab" },
        ]
      },
      {
        name: "xTransaccion_oAsDe",
        unique: true,
        fields: [
          { name: "VisTransa" },
          { name: "IdeRegAsi" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xTransDebHac",
        unique: true,
        fields: [
          { name: "VisTransa" },
          { name: "DebHaber" },
          { name: "CodCuenta" },
          { name: "IdCompro" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xVisTransa_oAsDe",
        fields: [
          { name: "VisTransa" },
        ]
      },
    ]
  });
};
