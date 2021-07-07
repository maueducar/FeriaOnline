const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucCodCon', {
    CodCondicion: {
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
    DescCondicion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucCodCon',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCondicion_uCodC",
        unique: true,
        fields: [
          { name: "CodCondicion" },
        ]
      },
      {
        name: "xDesCondicion",
        fields: [
          { name: "DescCondicion" },
        ]
      },
    ]
  });
};
