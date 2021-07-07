const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcCursos', {
    CodCurso: {
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
    tableName: 'tcCursos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCurso_tcCuso",
        unique: true,
        fields: [
          { name: "CodCurso" },
        ]
      },
      {
        name: "xDescrip_tcCuso",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
