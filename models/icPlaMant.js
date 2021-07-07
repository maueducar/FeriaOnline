const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icPlaMant', {
    IdPlan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodUni: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    CodTarea: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Articulo: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ArticuloAlter: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ArticuloAlter2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Periodo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'icPlaMant',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArticu_iPlMa",
        fields: [
          { name: "Articulo" },
        ]
      },
      {
        name: "xCodTareSolo_IPlMa",
        fields: [
          { name: "CodTarea" },
        ]
      },
      {
        name: "xIdPlan_IPlMa",
        unique: true,
        fields: [
          { name: "IdPlan" },
        ]
      },
      {
        name: "xPeriodo_iPlMa",
        unique: true,
        fields: [
          { name: "CodUni" },
          { name: "Periodo" },
          { name: "NroOrden" },
        ]
      },
    ]
  });
};
