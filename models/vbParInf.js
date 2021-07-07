const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vbParInf', {
    NomProc: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodRubroD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRubroH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticuD: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodArticuH: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodCenStoD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenStoH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPreD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPreH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vbParInf',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xNomProcUser_vPaIn",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdUsuario" },
        ]
      },
    ]
  });
};
