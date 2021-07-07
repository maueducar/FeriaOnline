const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccConCoD', {
    CodConComp: {
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
    PorMonFact: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    aVenEnDias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ccConCoD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cCoCD",
        unique: true,
        fields: [
          { name: "CodConComp" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
