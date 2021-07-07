const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icTipMov', {
    CodTipUni: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'icTipMov',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_iTiMo",
        unique: true,
        fields: [
          { name: "CodTipUni" },
        ]
      },
      {
        name: "xDescr_iTiMo",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
