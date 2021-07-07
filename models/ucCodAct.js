const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucCodAct', {
    CodActividad: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Desde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DescActividad: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucCodAct',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodActividad",
        unique: true,
        fields: [
          { name: "CodActividad" },
        ]
      },
      {
        name: "xDesActividad",
        fields: [
          { name: "DescActividad" },
        ]
      },
    ]
  });
};
