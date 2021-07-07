const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtCamaras', {
    Codigo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rtCamaras',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_Cama",
        unique: true,
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "PorDescripcion_Cama",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
