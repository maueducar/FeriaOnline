const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtTLe', {
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Talle: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtTLe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNroOrden_sArTE",
        unique: true,
        fields: [
          { name: "NroOrden" },
        ]
      },
      {
        name: "xTalle",
        fields: [
          { name: "Talle" },
        ]
      },
    ]
  });
};
