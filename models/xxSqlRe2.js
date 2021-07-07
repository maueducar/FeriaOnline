const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xxSqlRe2', {
    Columna01: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna02: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna03: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna04: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna05: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna06: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna07: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna08: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna09: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Columna10: {
      type: DataTypes.STRING(51),
      allowNull: true,
      defaultValue: ""
    },
    Thread: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistroN: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistroC: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'xxSqlRe2',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xColumna01_xxSqR2",
        fields: [
          { name: "Columna01" },
        ]
      },
      {
        name: "xIdRegistro_xxSqR2",
        unique: true,
        fields: [
          { name: "Thread" },
          { name: "IdRegistroN" },
          { name: "IdRegistroC" },
        ]
      },
    ]
  });
};
