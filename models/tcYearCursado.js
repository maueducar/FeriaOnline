const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcYearCursado', {
    CodYear: {
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
    tableName: 'tcYearCursado',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodYear_tcYeCu",
        unique: true,
        fields: [
          { name: "CodYear" },
        ]
      },
      {
        name: "xDescrip_tcYeCu",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
