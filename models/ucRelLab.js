const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucRelLab', {
    CodRelLaboral: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesRelLavoral: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ConVencim: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PorAporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorContrib: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ucRelLab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodRelLaboral",
        unique: true,
        fields: [
          { name: "CodRelLaboral" },
        ]
      },
      {
        name: "xDesRelLaboral",
        fields: [
          { name: "DesRelLavoral" },
        ]
      },
    ]
  });
};
