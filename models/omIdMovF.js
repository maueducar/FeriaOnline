const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omIdMovF', {
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AltaUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    AltaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AltaHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BajaUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    BajaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BajaHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omIdMovF',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCtaCajaNroInt",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
          { name: "NroInterno" },
        ]
      },
      {
        name: "xIdComprob_oIdMo",
        fields: [
          { name: "IdCompro" },
        ]
      },
    ]
  });
};
