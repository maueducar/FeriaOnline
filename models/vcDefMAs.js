const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefMAs', {
    CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodModAsie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ApliDesFec: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vcDefMAs',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodComp_vDeMa",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "ApliDesFec" },
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xCodCompModAs_vDeMA",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "CodModAsie" },
        ]
      },
      {
        name: "xCodDefCom_vDeMA",
        fields: [
          { name: "CodDefCom" },
        ]
      },
      {
        name: "xModAsie_vDeMa",
        fields: [
          { name: "CodModAsie" },
        ]
      },
    ]
  });
};
