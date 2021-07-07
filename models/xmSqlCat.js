const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmSqlCat', {
    IdCategSql: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NomProc: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    DesCategoria: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmSqlCat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xDescrip_xSqCt",
        unique: true,
        fields: [
          { name: "DesCategoria" },
          { name: "IdCategSql" },
        ]
      },
      {
        name: "xIdCateg_xSqCt",
        unique: true,
        fields: [
          { name: "IdCategSql" },
        ]
      },
      {
        name: "xNomProc_xSqCt",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdCategSql" },
        ]
      },
    ]
  });
};
