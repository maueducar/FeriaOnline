const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccProCre', {
    CodCreProv: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    LimCreTot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCrePen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimCreChe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimTipCre: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    LimTolCre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ccProCre',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cPrCr",
        unique: true,
        fields: [
          { name: "CodCreProv" },
        ]
      },
      {
        name: "xDescripcion_cPrCr",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
