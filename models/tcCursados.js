const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcCursados', {
    CodCursado: {
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
    tableName: 'tcCursados',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCursado_tcCusa",
        unique: true,
        fields: [
          { name: "CodCursado" },
        ]
      },
      {
        name: "xDescrip_tcCusa",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
