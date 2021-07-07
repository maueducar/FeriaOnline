const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcCarrera', {
    CodCarrera: {
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
    tableName: 'tcCarrera',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCarrera_tcCarr",
        unique: true,
        fields: [
          { name: "CodCarrera" },
        ]
      },
      {
        name: "xDescrip_tcCarr",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
