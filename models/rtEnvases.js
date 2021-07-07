const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtEnvases', {
    Codigo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Kilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConRetorno: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PrecioSena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rtEnvases',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_Enva",
        unique: true,
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "PorDescripcion_Enva",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
