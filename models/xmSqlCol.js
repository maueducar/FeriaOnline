const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmSqlCol', {
    IdConsSql: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdColumna: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroColumna: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AnchoColumna: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TitColumna: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    PictColumna: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Sumarizar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FieldPrincipal: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DesCampo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    IdSqlLookup: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AccCampo: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    AccCampoParam: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmSqlCol',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdConsIdCol_xSqCo",
        unique: true,
        fields: [
          { name: "IdConsSql" },
          { name: "IdColumna" },
        ]
      },
      {
        name: "xIdConsNroCol_xSqCo",
        unique: true,
        fields: [
          { name: "IdConsSql" },
          { name: "NroColumna" },
          { name: "IdColumna" },
        ]
      },
      {
        name: "xIdConsulta_xSqCo",
        fields: [
          { name: "IdConsSql" },
        ]
      },
      {
        name: "xIdTipoNroCol_xSqCo",
        unique: true,
        fields: [
          { name: "IdConsSql" },
          { name: "FieldPrincipal" },
          { name: "NroColumna" },
          { name: "IdColumna" },
        ]
      },
    ]
  });
};
