const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcConVeT', {
    CodConVen: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdOrder: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipTolerancia: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ValDeDessvio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VarComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcConVeT',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vCoVT",
        unique: true,
        fields: [
          { name: "CodConVen" },
          { name: "IdOrder" },
        ]
      },
      {
        name: "xCodigoTipo_vCoVT",
        fields: [
          { name: "CodConVen" },
          { name: "TipTolerancia" },
          { name: "ValDeDessvio" },
        ]
      },
    ]
  });
};
