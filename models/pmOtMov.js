const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmOtMov', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Secuenci: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenTra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTarea: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorInicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantAjust: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    IdLegOperador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdParTareas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdLegOpe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pmOtMov',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCenTra_pmOtMo",
        fields: [
          { name: "CodCenTra" },
          { name: "Fecha" },
          { name: "HorInicio" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xCodCenTra_pmOtMo_2",
        fields: [
          { name: "CodCenTra" },
        ]
      },
      {
        name: "xCodTarea",
        fields: [
          { name: "CodTarea" },
          { name: "Fecha" },
          { name: "HorInicio" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xCodTarea_pmOtMo",
        fields: [
          { name: "CodTarea" },
        ]
      },
      {
        name: "xLegParTar_pmOtMo",
        unique: true,
        fields: [
          { name: "IdLegOpe" },
          { name: "IdParTareas" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNumOT_pmOtMo",
        fields: [
          { name: "NumOT" },
        ]
      },
      {
        name: "xNumOt_pOtMo",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "Fecha" },
          { name: "HorInicio" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNumOtIdReg_pmOtMo",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xOtSecuencia",
        unique: true,
        fields: [
          { name: "NumOT" },
          { name: "Secuenci" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xParTareas_pmOtMo",
        unique: true,
        fields: [
          { name: "IdParTareas" },
          { name: "CodTarea" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
