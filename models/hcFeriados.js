const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcFeriados', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Anio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipoFeriado: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    IncluAutom: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hcFeriados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xAnio_hFer",
        unique: true,
        fields: [
          { name: "Anio" },
          { name: "Fecha" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xFecha_hFer",
        fields: [
          { name: "Fecha" },
        ]
      },
      {
        name: "xIdRegistro_hFer",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
