const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmPlaEnv', {
    CodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroCompEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEnvasam: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NomUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegitro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'pmPlaEnv',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFecEnvasam",
        fields: [
          { name: "FecEnvasam" },
        ]
      },
      {
        name: "xIdComprob_pPlEn",
        fields: [
          { name: "IdCompEnva" },
        ]
      },
      {
        name: "xIdRegistro_pPlEn",
        unique: true,
        fields: [
          { name: "IdRegitro" },
        ]
      },
      {
        name: "xNroComprob_pPlEn",
        fields: [
          { name: "CodComprob" },
          { name: "NroCompEnva" },
          { name: "IdCompEnva" },
          { name: "IdRegitro" },
        ]
      },
    ]
  });
};
