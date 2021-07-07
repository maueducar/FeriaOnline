const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccCConci', {
    CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    ComConciliable: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Exigido: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ccCConci',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cCCon",
        fields: [
          { name: "CodDefCom" },
        ]
      },
      {
        name: "xComConciliable",
        unique: true,
        fields: [
          { name: "ComConciliable" },
          { name: "CodDefCom" },
        ]
      },
      {
        name: "xComConciliador",
        unique: true,
        fields: [
          { name: "CodDefCom" },
          { name: "ComConciliable" },
        ]
      },
    ]
  });
};
