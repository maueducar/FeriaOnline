const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcSedes', {
    CodSede: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tcSedes',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodSede_tcSede",
        unique: true,
        fields: [
          { name: "CodSede" },
        ]
      },
      {
        name: "xDescrip_tcSede",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
