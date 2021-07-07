const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliGar', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGarante: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ManDeBien: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    CarEnviad: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      defaultValue: ""
    },
    RazSocial: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Calle: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    NroFax: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    E_Mail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPais: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodSitIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HayObserv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    HayManBie: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    HayCarEnv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CueBloque: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecBloque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecDeAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LugTrabajo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TelTrabajo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliGar',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCliCodGar_vClGa",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodGarante" },
        ]
      },
      {
        name: "xCodCliente_vClGa",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodGarante_vClGa",
        unique: true,
        fields: [
          { name: "CodGarante" },
        ]
      },
      {
        name: "xLocalidad_vClGa",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xNroDocum_vClGa",
        unique: true,
        fields: [
          { name: "NumDocume" },
          { name: "CodGarante" },
        ]
      },
      {
        name: "xProvincia_vClGa",
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xRazonSocial_vClGa",
        unique: true,
        fields: [
          { name: "RazSocial" },
          { name: "CodGarante" },
        ]
      },
      {
        name: "xSitIVA_vClGa",
        fields: [
          { name: "CodSitIVA" },
        ]
      },
    ]
  });
};
