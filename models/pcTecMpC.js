const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcTecMpC', {
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodProvee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdFicTecnica: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroFicTecnica: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomComercial: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Plazo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Origen: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    FecUltCotiz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TamaLote: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Tipo: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica01: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica02: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica03: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica04: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica05: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica06: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica07: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica08: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica09: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EspTecnica10: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pcTecMpC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtiProvee_pFTeC",
        fields: [
          { name: "CodArticu" },
          { name: "CodProvee" },
          { name: "NroFicTecnica" },
        ]
      },
      {
        name: "xIdFicha_pFTeC",
        unique: true,
        fields: [
          { name: "IdFicTecnica" },
        ]
      },
      {
        name: "xLisPreArti_pFTeC",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xProveeArti_pFTeC",
        fields: [
          { name: "CodProvee" },
          { name: "CodArticu" },
          { name: "NroFicTecnica" },
        ]
      },
    ]
  });
};
