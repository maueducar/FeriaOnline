const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccProGru', {
    CodGruProv: {
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
    tableName: 'ccProGru',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cPrGr",
        unique: true,
        fields: [
          { name: "CodGruProv" },
        ]
      },
      {
        name: "xDescripcion_cPrGr",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
