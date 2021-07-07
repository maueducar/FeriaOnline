const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcCondCursado', {
    CodCondCursado: {
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
    tableName: 'tcCondCursado',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCondCur_tcCoCu",
        unique: true,
        fields: [
          { name: "CodCondCursado" },
        ]
      },
      {
        name: "xDescrip_tcCoCu",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
