const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocIndDet', {
    CodIndice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecIndiceLong: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecIndice: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ValIndice: {
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
    tableName: 'ocIndDet',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodInd_FecInd",
        unique: true,
        fields: [
          { name: "CodIndice" },
          { name: "FecIndiceLong" },
        ]
      },
      {
        name: "xCodIndice_oInDe",
        fields: [
          { name: "CodIndice" },
        ]
      },
    ]
  });
};
