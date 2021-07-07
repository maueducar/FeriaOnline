const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmLogTrig', {
    IdRegistro: {
      autoIncrement: true,
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true
    },
    TriggerName: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TableName: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    IdComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoLog: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(1001),
      allowNull: false,
      defaultValue: ""
    },
    FechaLog: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'xmLogTrig',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_xLoTr",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTableName_xLoTr",
        fields: [
          { name: "TableName" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
