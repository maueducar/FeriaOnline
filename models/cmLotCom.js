const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmLotCom', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodPunVenFormal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecTrabajo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraInicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecCierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecMayorizacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstadoMayConta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecComDesde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecComHasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    EstadoCierre: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroListados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLotInte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ArchIntegr: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CajCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CajCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CajNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StkCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StkCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StkNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UserName: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Id_GruLotes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado_EstadComp: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Estado_EstadProv: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Estado_CtrlCompe: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    NroTabEstado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Reabierto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CheckSumCabeceras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CheckSumDetalles: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SumDebMayorizados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SumCreMayorizados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SDH_Pasado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SDH_Modificado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cmLotCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodSucurs_cLoCo",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xEstadoCierre",
        unique: true,
        fields: [
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xEstadoContabil",
        fields: [
          { name: "EstadoMayConta" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xFecCierre",
        fields: [
          { name: "FecCierre" },
        ]
      },
      {
        name: "xFecha",
        unique: true,
        fields: [
          { name: "FecTrabajo" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xFechaTrabajo",
        fields: [
          { name: "FecTrabajo", order: "DESC" },
        ]
      },
      {
        name: "xGralTabFecha",
        unique: true,
        fields: [
          { name: "NroTabEstado" },
          { name: "FecTrabajo" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xID_GruLotes",
        unique: true,
        fields: [
          { name: "Id_GruLotes" },
        ]
      },
      {
        name: "xLoteInteConta",
        fields: [
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xNumerador",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xPTraFecCierre",
        fields: [
          { name: "CodPunVen" },
          { name: "FecCierre" },
        ]
      },
      {
        name: "xPTraFecha",
        fields: [
          { name: "CodPunVen" },
          { name: "FecTrabajo" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xPTraNumLote",
        fields: [
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xPTraTabFecha",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "NroTabEstado" },
          { name: "FecTrabajo" },
          { name: "NumLote" },
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xPueTraEstadoCierra",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xSucurLote",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
    ]
  });
};
