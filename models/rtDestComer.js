const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtDestComer', {
    CodDesComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rtDestComer',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_rDeCo",
        unique: true,
        fields: [
          { name: "CodDesComer" },
        ]
      },
      {
        name: "PorDescripcion_rDeCo",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
