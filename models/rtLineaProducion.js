const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtLineaProducion', {
    Codigo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rtLineaProducion',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_Line",
        unique: true,
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "PorDescripcion_Line",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
