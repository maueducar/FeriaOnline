const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smLotCom', {
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
    ReAbierto: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    TagProcess: {
      type: DataTypes.STRING(3),
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
    Estado_ActualizStock: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Estado_ActualizPPP: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    NroTabEstado: {
      type: DataTypes.STRING(11),
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
    tableName: 'smLotCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodSucurs_sLoCo",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xEstadoCierre_sLoCo",
        unique: true,
        fields: [
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xEstadoContabil_sLoCo",
        fields: [
          { name: "EstadoMayConta" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xFecCierre_sLoCo",
        fields: [
          { name: "FecCierre" },
        ]
      },
      {
        name: "xFecha_sLoCo",
        unique: true,
        fields: [
          { name: "FecTrabajo" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xFechaTrabajo_sLoCo",
        fields: [
          { name: "FecTrabajo", order: "DESC" },
        ]
      },
      {
        name: "xGralTabFecha_sLoCo",
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
        name: "xID_GruLotes_sLoCo",
        unique: true,
        fields: [
          { name: "Id_GruLotes" },
        ]
      },
      {
        name: "xLoteInteConta_sLoCo",
        fields: [
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xNumerador_sLoCo",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xPTraFecCierre_sLoCo",
        fields: [
          { name: "CodPunVen" },
          { name: "FecCierre" },
        ]
      },
      {
        name: "xPTraFecha_sLoCo",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "FecTrabajo" },
          { name: "NumLote" },
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xPTraNumLote_sLoCo",
        fields: [
          { name: "CodPunVen" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xPTraTabFecha_sLoCo",
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
        name: "xPueTraEstadoCierre_sLoCo",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xSucurLote_sLoCo",
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
