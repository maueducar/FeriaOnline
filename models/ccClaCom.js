const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccClaCom', {
    TexClausula: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    CodClaCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipClausula: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ccClaCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo",
        unique: true,
        fields: [
          { name: "CodClaCom" },
        ]
      },
      {
        name: "xDescripcion",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xTipo",
        fields: [
          { name: "TipClausula" },
        ]
      },
    ]
  });
};
