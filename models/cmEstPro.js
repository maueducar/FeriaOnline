const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmEstPro', {
    TipAcumulador: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodProvee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodBarra: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanBultos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorBonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetTotales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BruFinalUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BruTotales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubtFacturas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubtPagos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubtNDChe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubtNCred: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubtNDeb: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PromPagos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PromAcredit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'cmEstPro',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArticulo_cEsPr",
        fields: [
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xCodArticu_cEsPr",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xIdCompro_cEsPr",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xProveedor_cEsPr",
        fields: [
          { name: "CodProvee" },
        ]
      },
      {
        name: "xTipATotProveedor",
        fields: [
          { name: "TipAcumulador" },
          { name: "CodProvee" },
          { name: "FecCompro" },
        ]
      },
      {
        name: "xTipDTotProveedor",
        fields: [
          { name: "TipAcumulador" },
          { name: "CodProvee" },
          { name: "FecCompro", order: "DESC" },
        ]
      },
      {
        name: "xTipProvArticulos",
        fields: [
          { name: "TipAcumulador" },
          { name: "CodProvee" },
          { name: "FecCompro" },
          { name: "CodArticu" },
        ]
      },
    ]
  });
};
