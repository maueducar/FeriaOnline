const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliRes', {
    CodResponsable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NomResponsable: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliRes',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vReCl",
        unique: true,
        fields: [
          { name: "CodResponsable" },
        ]
      },
      {
        name: "xDescripcion_vReCl",
        fields: [
          { name: "NomResponsable" },
        ]
      },
    ]
  });
};
