const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliGru', {
    CodGruCli: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcCliGru',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vClGr",
        unique: true,
        fields: [
          { name: "CodGruCli" },
        ]
      },
      {
        name: "xDescripcion_vClGr",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
