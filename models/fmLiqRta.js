const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmLiqRta', {
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumeroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ImpDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MotRechazo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Clave: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    TextoRegistro: {
      type: DataTypes.STRING(601),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fmLiqRta',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClave_fLiRt",
        fields: [
          { name: "Clave" },
        ]
      },
      {
        name: "xIdLIquidacion_fLiRt",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdReg_fLiRt",
        unique: true,
        fields: [
          { name: "IdRegistro" },
          { name: "IdCompro" },
        ]
      },
    ]
  });
};
