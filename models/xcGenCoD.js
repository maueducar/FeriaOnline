const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xcGenCoD', {
    IdRegConfig: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegComGenerar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FileDestino: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroDeRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Campo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ExpAsignacion: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    TipoAsignacion: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xcGenCoD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistros_xGeDet",
        unique: true,
        fields: [
          { name: "IdRegConfig" },
          { name: "IdRegComGenerar" },
          { name: "FileDestino" },
          { name: "NroDeRegistro" },
          { name: "NroOrden" },
        ]
      },
    ]
  });
};
