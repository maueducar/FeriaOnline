const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmSegMFc', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PunVenLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    LeCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    PunVenComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecPromet: {
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
    HorAprobacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    HorNoAprobado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    HorPasoDisponib: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEntDisponib: {
      type: DataTypes.DATE,
      allowNull: true
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
    Domi_NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DirRetiro: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: ""
    },
    EquiReemplazo: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmSegMFc',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClieEstFecha_vSeMc",
        fields: [
          { name: "CodCliente" },
          { name: "FlagEstado" },
          { name: "FecCompro" },
        ]
      },
      {
        name: "xCliente_vSeMc",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xClienteFecha_vSeMc",
        fields: [
          { name: "CodCliente" },
          { name: "FecCompro", order: "DESC" },
        ]
      },
      {
        name: "xEstado_vSeMc",
        fields: [
          { name: "FlagEstado" },
          { name: "FecCompro" },
        ]
      },
      {
        name: "xFecha_vSeMc",
        fields: [
          { name: "FecCompro" },
          { name: "HoraComprob" },
        ]
      },
      {
        name: "xIdServicio_vSeMc",
        unique: true,
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNumPedido_vSeMc",
        fields: [
          { name: "Numero" },
          { name: "CodComVta" },
        ]
      },
      {
        name: "xVendedor_vSeMc",
        fields: [
          { name: "CodVended" },
          { name: "FecCompro" },
        ]
      },
      {
        name: "xVendedorSolo_vSeMc",
        fields: [
          { name: "CodVended" },
        ]
      },
    ]
  });
};
