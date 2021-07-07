const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcJurEnt', {
    CodJurEnt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcJurEnt',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vJuEn",
        unique: true,
        fields: [
          { name: "CodJurEnt" },
        ]
      },
      {
        name: "xDescripcion_vJuEn",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
