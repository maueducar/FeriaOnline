const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocIndCab', {
    CodIndice: {
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
    ValIndice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ocIndCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oInCa",
        unique: true,
        fields: [
          { name: "CodIndice" },
        ]
      },
      {
        name: "xDescripcion_oInCa",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
