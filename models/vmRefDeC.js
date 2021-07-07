const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmRefDeC', {
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
      defaultValue: ""
    },
    DebLetra: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    DebPtoDeVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebNroDeComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    Cliente: {
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
    }
  }, {
    sequelize,
    tableName: 'vmRefDeC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorCreditos_vReDe",
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
        name: "PorDebitos_vReDe",
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
        name: "PorNroLote_vReDe",
        unique: true,
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
        name: "xClientes",
        fields: [
          { name: "Cliente" },
          { name: "DebFechaComp" },
        ]
      },
      {
        name: "xIdCompro_vReDe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdComprobCre_vReDe",
        unique: true,
        fields: [
          { name: "CreIdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdComprobDeb_vReDe",
        unique: true,
        fields: [
          { name: "DebIdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroLote_vReDe",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroLoteComp" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
