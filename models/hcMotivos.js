const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcMotivos', {
    CodMotivo: {
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
    tableName: 'hcMotivos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_hMot",
        unique: true,
        fields: [
          { name: "CodMotivo" },
        ]
      },
      {
        name: "xDescripcion_hMot",
        unique: true,
        fields: [
          { name: "Descripcion" },
          { name: "CodMotivo" },
        ]
      },
    ]
  });
};
