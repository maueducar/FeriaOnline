const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucDiagno', {
    CodDiagnos: {
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
    tableName: 'ucDiagno',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodDiag_uDiag",
        unique: true,
        fields: [
          { name: "CodDiagnos" },
        ]
      },
      {
        name: "xDescripcion_uDiag",
        unique: true,
        fields: [
          { name: "Descripcion" },
          { name: "CodDiagnos" },
        ]
      },
    ]
  });
};
