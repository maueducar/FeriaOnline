const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmHorLiqD', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodTurno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumPeriodo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaIni: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraIni: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    FechaFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraFin: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    FinDiaSig: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoReg: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    Liquidable: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoInforme: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    UnidInfor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    InforDias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    InforHoras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PendVerificar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Ausencia: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdReg_HorEsper: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdReg_HorCump: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarJustif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SalJustif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hmHorLiqD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xConLiquid_hHoLi",
        fields: [
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xHorario_hHoLi",
        fields: [
          { name: "CodHorario" },
        ]
      },
      {
        name: "xIdLEgajo_hHoLi",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "Fecha" },
          { name: "HoraIni" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_hHoLi",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xTurno_hHoLi",
        fields: [
          { name: "CodTurno" },
        ]
      },
    ]
  });
};
