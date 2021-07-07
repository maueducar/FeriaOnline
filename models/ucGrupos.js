const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucGrupos', {
    CodGrupo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesGrupo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucGrupos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodGrupo_uGru",
        unique: true,
        fields: [
          { name: "CodGrupo" },
        ]
      },
      {
        name: "xDesGrupo_uGru",
        fields: [
          { name: "DesGrupo" },
        ]
      },
    ]
  });
};
