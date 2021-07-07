const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmHorCum', {
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
    HoraIni: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaIni: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    HoraFin: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaFin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    FinDiaSig: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UnidInfor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HoraIni2: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaIni2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    HoraFin2: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaFin2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    FinDiaSig2: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UnidInfor2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HoraIni3: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaIni3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    HoraFin3: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IdRegFichadaFin3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    FinDiaSig3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UnidInfor3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UnidInforTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    IdReg_HorEsper: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RegResDia: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FechaHorIni: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaHorFin: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'hmHorCum',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xFecha_hHoCu",
        unique: true,
        fields: [
          { name: "Fecha" },
          { name: "HoraIni" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdLegajo_hHoCu",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "RegResDia" },
          { name: "Fecha" },
          { name: "HoraIni" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdRegistro_hHoCu",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
