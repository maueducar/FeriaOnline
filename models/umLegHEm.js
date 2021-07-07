const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegHEm', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(5001),
      allowNull: false,
      defaultValue: ""
    },
    Autos: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Caratula: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    Juzgado: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TotEmbargar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MesInicio: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'umLegHEm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegFech_uLeEm",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "Fecha", order: "DESC" },
          { name: "Hora", order: "DESC" },
        ]
      },
      {
        name: "xIdLegYIdReg_uLeEm",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "IdRegistro", order: "DESC" },
        ]
      },
    ]
  });
};
