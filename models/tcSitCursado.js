const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcSitCursado', {
    CodSitCur: {
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
    tableName: 'tcSitCursado',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodAran_tcSiCu",
        unique: true,
        fields: [
          { name: "CodSitCur" },
        ]
      },
      {
        name: "xDescrip_tcSiCu",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
