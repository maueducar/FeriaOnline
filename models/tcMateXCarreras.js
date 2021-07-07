const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcMateXCarreras', {
    CodMate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCarrera: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'tcMateXCarreras',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCarrera_tcMaCa",
        fields: [
          { name: "CodCarrera" },
        ]
      },
      {
        name: "xMateria_tcMaCa",
        fields: [
          { name: "CodMate" },
        ]
      },
      {
        name: "xMateXCarre_tcMaCa",
        unique: true,
        fields: [
          { name: "CodCarrera" },
          { name: "CodMate" },
        ]
      },
    ]
  });
};
