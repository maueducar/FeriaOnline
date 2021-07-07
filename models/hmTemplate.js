const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmTemplate', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Template: {
      type: DataTypes.STRING(8000),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hmTemplate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegajo_hmTem",
        unique: true,
        fields: [
          { name: "IdLegajo" },
        ]
      },
    ]
  });
};
