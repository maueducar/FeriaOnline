const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pruebasuc', {
    sqlscript: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pruebasuc',
    schema: 'dbo',
    timestamps: false
  });
};
