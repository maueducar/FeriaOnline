const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DescuentoAntiguedadConceptos', {
    DescuentoID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AntiguedadDesde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    AntiguedadHasta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PorcDescuento: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DescuentoAntiguedadConceptos',
    schema: 'dbo',
    timestamps: false
  });
};
