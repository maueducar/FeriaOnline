const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmSqlRes', {
    IdConsSql: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    xIdSesion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ClaveUnica: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Columna01: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna02: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna03: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna04: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna05: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna06: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna07: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna08: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna09: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna10: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna11: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna12: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna13: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna14: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna15: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna16: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna17: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna18: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna19: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna20: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna21: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna22: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna23: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna24: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna25: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna26: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna27: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna28: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna29: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna30: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna31: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna32: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna33: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna34: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna35: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna36: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna37: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna38: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna39: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Columna40: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    ResEsperado: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmSqlRes',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdConsIdSesl_xSqRe",
        unique: true,
        fields: [
          { name: "IdConsSql" },
          { name: "xIdSesion" },
          { name: "ClaveUnica" },
        ]
      },
      {
        name: "xIdConsulta_xSqRe",
        fields: [
          { name: "IdConsSql" },
        ]
      },
    ]
  });
};
