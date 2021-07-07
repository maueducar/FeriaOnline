const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliDom', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RazSocial: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodPais: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Calle: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EMail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Barrio: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Observacion: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Departamento: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroLegajo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodReparticion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LugTrabajo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NetCobrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcCliDom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClienteOrden",
        fields: [
          { name: "CodCliente" },
          { name: "NumOrden" },
        ]
      },
      {
        name: "xClienteOrdenID",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "NumOrden" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodCliente_vClDo",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xIdReg_vClDo",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xLocalidad_vClDo",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xPais_vClDo",
        fields: [
          { name: "CodPais" },
        ]
      },
      {
        name: "xProvincia_vClDo",
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xZona_vClDo",
        fields: [
          { name: "CodZona" },
        ]
      },
    ]
  });
};
