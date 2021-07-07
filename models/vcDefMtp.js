const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefMtp', {
    MemoTexto: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    ModDeUso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodTxtPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesTxtPie: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipComCorresp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecNoUso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdUsuNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomUsuNoUso: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcDefMtp',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vDeMT",
        unique: true,
        fields: [
          { name: "CodTxtPie" },
        ]
      },
      {
        name: "xDescripcion_vDeMT",
        fields: [
          { name: "DesTxtPie" },
        ]
      },
      {
        name: "xModCodigo",
        fields: [
          { name: "ModDeUso" },
          { name: "CodTxtPie" },
        ]
      },
      {
        name: "xModDescripcion",
        fields: [
          { name: "ModDeUso" },
          { name: "DesTxtPie" },
        ]
      },
    ]
  });
};
