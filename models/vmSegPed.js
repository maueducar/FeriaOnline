const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmSegPed', {
    PedIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PedVisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    PedCodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    PedNumero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PedCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PedPunVenLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PedNumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PedCodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    PedFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PedHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PedFecPromet: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aprobacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UsuAprobacion: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    FecAprobacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NoAproMotivo: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: ""
    },
    NoAproAccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    UsuPasoExped: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    FecPasoExped: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AnuEnExped: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecAnuEnExped: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuAnuEnExped: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    MotAnuEnExped: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    AccAnuEnExped: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    NoConfAnuEnExped: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UsuPasoDisponib: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    FecPasoDisponib: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecEntDisponib: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ObsTransporte: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    ModPasoDisponib: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    NewPedIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NewPedVisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FacIdComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FacCodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    FacVisComprob: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    RemIdComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RemCodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    RemVisComprob: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    RemUsuRealEntrega: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    RemFecRealEntrega: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesEstado: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FlagEstado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    HorAprobacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HorNoAprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HorPasoExped: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HorAnuEnExped: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HorPasoDisponib: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMotPendiente: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    UsuConformoWeb: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    FecConformoWeb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorConformoWeb: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesTransporte: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    TelTransporte: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmSegPed',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClieEstFecha_vSePe",
        fields: [
          { name: "CodCliente" },
          { name: "FlagEstado" },
          { name: "PedFecha" },
        ]
      },
      {
        name: "xCliente_vSePe",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xClienteFecha_vSePe",
        fields: [
          { name: "CodCliente" },
          { name: "PedFecha", order: "DESC" },
        ]
      },
      {
        name: "xEstado_vSePe",
        fields: [
          { name: "FlagEstado" },
          { name: "PedFecha" },
        ]
      },
      {
        name: "xFecha_vSePe",
        fields: [
          { name: "PedFecha" },
          { name: "PedHora" },
        ]
      },
      {
        name: "xIdPedido_vSePe",
        unique: true,
        fields: [
          { name: "PedIdCompro" },
        ]
      },
      {
        name: "xNumPedido_vSePe",
        fields: [
          { name: "PedNumero" },
          { name: "PedCodComprob" },
        ]
      },
      {
        name: "xVendedor_vSePe",
        fields: [
          { name: "CodVended" },
          { name: "PedFecha" },
        ]
      },
      {
        name: "xVendedorSolo_vSePe",
        fields: [
          { name: "CodVended" },
        ]
      },
    ]
  });
};
