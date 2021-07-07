const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wgParametros', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RazonSocial: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    NroCuit: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    InscrpipINV: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Imprime1erTicket: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CantCopias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreviewTicket: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CantCopBasP: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ModTickBTN_1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModTickBTN_2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModTickBTN_ConEnv: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModTickBPU_1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModTickBPU_N: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodTalLiquid: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComLiquid: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    ModFormCIU_N: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ModTicket1Uvas: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    RendKgUvaPorHa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIniCosecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodTalLiquidXEnva: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComLiquidXEnva: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestCIU: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    CanTiempoCamionesTran: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorMult: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorUva_Mosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorUva_Vino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaPago: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechLimTen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PorcGasElab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bascula1protocolo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Bascula2protocolo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Bascula1Port: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    Bascula2Port: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    Bascula1Factor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bascula2Factor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Impre1Ticket: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Impre2Ticket: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Impre3Ticket: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    PesoMinimoPermitido: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesoMaximoPermitido: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CosechaActual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wgParametros',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodTalLiquid_gPara",
        fields: [
          { name: "CodTalLiquid" },
        ]
      },
      {
        name: "xIdRegistro_gPara",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTalComprob",
        fields: [
          { name: "CodTalLiquid" },
          { name: "CodComLiquid" },
        ]
      },
    ]
  });
};
