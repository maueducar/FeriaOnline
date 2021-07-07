const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmRefCom', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
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
    NroLoteComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebTipoDeComp: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DebLetra: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DebPtoDeVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DebNroDeComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DebIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DebPresentComprob: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DebImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebMonExtImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebFechaComp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreTipoDeComp: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    CreLetra: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CrePtoDeVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreNroDeComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CrePresentComprob: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CreImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreMonExtImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreFechaComp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreFlagReteGan: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CreFlagReteIB: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CreFlagReteIVA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Aplicado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtAplicado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Proveedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UserCompens: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FecCompens: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorCompens: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    UserDesComp: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FecDesComp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorDesComp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCotiza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cmRefCom',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorCreditos_cRfCo",
        unique: true,
        fields: [
          { name: "CreTipoDeComp" },
          { name: "CreLetra" },
          { name: "CrePtoDeVenta" },
          { name: "CreNroDeComprob" },
          { name: "CreIdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "PorDebitos_cRfCo",
        unique: true,
        fields: [
          { name: "DebTipoDeComp" },
          { name: "DebLetra" },
          { name: "DebPtoDeVenta" },
          { name: "DebNroDeComprob" },
          { name: "DebIdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "PorNroLote_cRfCo",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLoteComp" },
          { name: "CreTipoDeComp" },
          { name: "CreLetra" },
          { name: "CrePtoDeVenta" },
          { name: "CreNroDeComprob" },
          { name: "CreIdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "PorNroLote_cRfCo_2",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLoteComp" },
        ]
      },
      {
        name: "xClientes_cRfCo",
        fields: [
          { name: "Proveedor" },
          { name: "DebFechaComp" },
        ]
      },
      {
        name: "xIdComprobCre",
        fields: [
          { name: "CreIdCompro" },
        ]
      },
      {
        name: "xIdComprobDeb",
        fields: [
          { name: "DebIdCompro" },
        ]
      },
    ]
  });
};
