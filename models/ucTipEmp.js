const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucTipEmp', {
    CodTipEmpr: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesdeFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HastaFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesTipEmpresa: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucTipEmp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_uTiEm",
        unique: true,
        fields: [
          { name: "CodTipEmpr" },
        ]
      },
    ]
  });
};
