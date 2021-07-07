const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucMotSan', {
    CodMotSan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucMotSan',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodDiag_uMoSa",
        unique: true,
        fields: [
          { name: "CodMotSan" },
        ]
      },
      {
        name: "xDescripcion_uMoSa",
        unique: true,
        fields: [
          { name: "Descripcion" },
          { name: "CodMotSan" },
        ]
      },
    ]
  });
};
