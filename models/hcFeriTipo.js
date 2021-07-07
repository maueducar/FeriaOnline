const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcFeriTipo', {
    TipoFeriado: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'hcFeriTipo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xTipoFeriado_hTiFe",
        unique: true,
        fields: [
          { name: "TipoFeriado" },
        ]
      },
    ]
  });
};
