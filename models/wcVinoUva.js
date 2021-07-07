const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcVinoUva', {
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PorDefecto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FactorParaVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorParaMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wcVinoUva',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigoUva_Vino_wViUv",
        unique: true,
        fields: [
          { name: "CodVarUva" },
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xCodigoVino_Uva_wViUv",
        unique: true,
        fields: [
          { name: "CodTipVino" },
          { name: "CodVarUva" },
        ]
      },
    ]
  });
};
