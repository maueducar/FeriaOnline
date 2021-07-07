const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucConTiC', {
    CodTipCon: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesTipCon: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucConTiC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodTipCon",
        unique: true,
        fields: [
          { name: "CodTipCon" },
        ]
      },
    ]
  });
};
