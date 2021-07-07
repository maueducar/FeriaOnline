const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omPeFDet', {
    IdRegistroCab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistroDet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PerFiscal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OriVenCompra: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodImpuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoReg: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NetoGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omPeFDet',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdReg_oPeFD",
        unique: true,
        fields: [
          { name: "IdRegistroCab" },
          { name: "IdRegistroDet" },
        ]
      },
      {
        name: "xPerFiscal_oPeFD",
        unique: true,
        fields: [
          { name: "PerFiscal" },
          { name: "IdRegistroCab" },
          { name: "IdRegistroDet" },
        ]
      },
      {
        name: "xPeriTipoCod",
        unique: true,
        fields: [
          { name: "PerFiscal" },
          { name: "OriVenCompra" },
          { name: "TipoReg" },
          { name: "CodImpuesto" },
          { name: "IdRegistroCab" },
          { name: "IdRegistroDet" },
        ]
      },
      {
        name: "xPerSucPVta",
        unique: true,
        fields: [
          { name: "PerFiscal" },
          { name: "OriVenCompra" },
          { name: "CodSucurs" },
          { name: "PunVenCom" },
          { name: "TipoReg" },
          { name: "CodImpuesto" },
          { name: "IdRegistroCab" },
          { name: "IdRegistroDet" },
        ]
      },
    ]
  });
};
