const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuxVaRelacionJefeVenta', {
    IdRelacionJefeVenta: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    JefeVentaCodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Baja: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'AuxVaRelacionJefeVenta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AuxVaRel__039B0D1583AD9578",
        unique: true,
        fields: [
          { name: "IdRelacionJefeVenta" },
        ]
      },
    ]
  });
};
