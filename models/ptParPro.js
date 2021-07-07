const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptParPro', {
    Id_Parametro: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    TermOtTalon: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TermOtComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CompromOtTalon: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CompromOtComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CenStoComprom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GenCodTalonario: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GenCodComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GenDescripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ptParPro',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdParametro",
        unique: true,
        fields: [
          { name: "Id_Parametro" },
        ]
      },
    ]
  });
};
