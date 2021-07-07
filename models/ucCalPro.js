const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucCalPro', {
    CodCaliProf: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesCalifProf: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucCalPro',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCalifPro",
        unique: true,
        fields: [
          { name: "CodCaliProf" },
        ]
      },
      {
        name: "xDesCalifPro",
        fields: [
          { name: "DesCalifProf" },
        ]
      },
    ]
  });
};
