const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucForPag', {
    CodForPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesForPago: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucForPag',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodForPag",
        unique: true,
        fields: [
          { name: "CodForPago" },
        ]
      },
    ]
  });
};
