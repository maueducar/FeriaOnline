const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmPlaCaj', {
    Id_GruLotes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
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
    NoUser: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDeLote: {
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
    OrigenDeLote: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    FechaDelLote: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraInicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaCierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoCierre: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EstadoImpresion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoMayConta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IntegContab: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
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
    CantComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeFecha_1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesdeFecha_2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CtrlDeSuma1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CtrlDeSuma2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CtrlDeSuma3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SaldoInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotV_CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotV_CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotV_NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotC_CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotC_CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LotC_NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'fmPlaCaj',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorEstadoCierre_fPlCa",
        unique: true,
        fields: [
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
      {
        name: "PorSucPVtaLote_fPlCa",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
      {
        name: "xCodSucurs_fPlCa",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xEstadoContabil_fPlCa",
        fields: [
          { name: "EstadoMayConta" },
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xFecCierre_fPlCa",
        fields: [
          { name: "FechaCierre" },
        ]
      },
      {
        name: "xFecha_fPlCa",
        unique: true,
        fields: [
          { name: "FechaDelLote" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
      {
        name: "xGralTabFecha_fPlCa",
        unique: true,
        fields: [
          { name: "NroTabEstado" },
          { name: "FechaDelLote" },
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroDeLote" },
        ]
      },
      {
        name: "xID_GruLotes_fPlCa",
        unique: true,
        fields: [
          { name: "Id_GruLotes" },
        ]
      },
      {
        name: "xLoteInteConta_fPlCa",
        fields: [
          { name: "NumLotInte" },
        ]
      },
      {
        name: "xPtoTraFecha",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "FechaDelLote" },
          { name: "NroDeLote" },
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xPTraFecCierre_fPlCa",
        fields: [
          { name: "CodPunVen" },
          { name: "FechaCierre" },
        ]
      },
      {
        name: "xPTraNumLote_fPlCa",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "NroDeLote" },
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xPTraTabFecha_fPlCa",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "NroTabEstado" },
          { name: "FechaDelLote" },
          { name: "NroDeLote" },
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xPueTrab_fPlCa",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xPueTraEstadoCierre",
        unique: true,
        fields: [
          { name: "CodPunVen" },
          { name: "EstadoCierre" },
          { name: "CodSucurs" },
          { name: "NoUser" },
          { name: "NroDeLote" },
        ]
      },
    ]
  });
};
