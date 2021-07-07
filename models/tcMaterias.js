const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcMaterias', {
    CodMate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodYear: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCursado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tcMaterias',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCursado_tcMate",
        fields: [
          { name: "CodCursado" },
        ]
      },
      {
        name: "xCodMate_tcMate",
        unique: true,
        fields: [
          { name: "CodMate" },
        ]
      },
      {
        name: "xDescrip_tcMate",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xYearCursado_tcMate",
        fields: [
          { name: "CodYear" },
        ]
      },
    ]
  });
};
