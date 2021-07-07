const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scEnvases', {
    CodEnva: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesEnva: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    DesAbrev: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    UniEmpaq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipEnvase: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Unidad: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Capacidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LlenadoMax: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LlenadoMin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesoEnvaVacio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'scEnvases',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sEnva",
        unique: true,
        fields: [
          { name: "CodEnva" },
        ]
      },
      {
        name: "xCodRubro_sEnva",
        fields: [
          { name: "CodRubro" },
        ]
      },
      {
        name: "xDescripcion_sEnva",
        fields: [
          { name: "DesEnva" },
        ]
      },
      {
        name: "xRubro_sEnva",
        unique: true,
        fields: [
          { name: "CodRubro" },
          { name: "DesEnva" },
          { name: "CodEnva" },
        ]
      },
    ]
  });
};
