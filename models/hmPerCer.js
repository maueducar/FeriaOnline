const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmPerCer', {
    IdPeriodo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    MesPeriodo: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hmPerCer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdPeriodo_hPeCe",
        unique: true,
        fields: [
          { name: "IdPeriodo" },
        ]
      },
    ]
  });
};
