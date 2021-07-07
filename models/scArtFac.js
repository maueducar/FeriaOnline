const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtFac', {
    CodFactor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Factor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'scArtFac',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodFactor_sArFa",
        unique: true,
        fields: [
          { name: "CodFactor" },
        ]
      },
    ]
  });
};
