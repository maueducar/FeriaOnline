const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliInfBan', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroCtaBancaria: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ImporteInformar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodBanco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoCuenta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroSucursal: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliInfBan',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodClieYId_Registro",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "Id_Registro" },
        ]
      },
    ]
  });
};
