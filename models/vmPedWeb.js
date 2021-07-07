const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmPedWeb', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreFinUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIngreso: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CodTraFle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesTransporte: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    TelTransporte: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmPedWeb',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClienteArt_vPeWe",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xClienteIdReg_vPeWe",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_vPeWe",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
