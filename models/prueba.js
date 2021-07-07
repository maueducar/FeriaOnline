const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prueba', {
    a: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    c: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    d: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    e: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    f: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prueba',
    schema: 'dbo',
    timestamps: false
  });
};
