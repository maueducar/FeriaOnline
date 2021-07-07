const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmCarJCa', {
    LotCartasSuc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotCartasNum: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagSeleccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FcVenCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FcVenTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FcNoVenCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FcNoVenTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NdVenCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NdVenTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NdNoVenCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NdNoVenTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotDeuVenc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreNoConCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CreNoConMont: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vmCarJCa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_vCaJC",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroLoteClien",
        fields: [
          { name: "LotCartasSuc" },
          { name: "LotCartasNum" },
          { name: "CodCliente" },
        ]
      },
      {
        name: "xNroLoteClien_vCaJC",
        fields: [
          { name: "LotCartasSuc" },
          { name: "LotCartasNum" },
        ]
      },
      {
        name: "xNroLoteTotalVen",
        fields: [
          { name: "LotCartasSuc" },
          { name: "LotCartasNum" },
          { name: "TotDeuVenc", order: "DESC" },
        ]
      },
    ]
  });
};
