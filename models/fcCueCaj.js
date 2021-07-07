const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fcCueCaj', {
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    TipCueCaja: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    EsBcoPropio: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EsCheq3ros: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EsOrdCompra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EsTarjeta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EsCredito: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ContInventario: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    InstDeAlta: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    BajasParciales: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CtaContable: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoImputCont: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    SolDebHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    NumerarInt: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqNroFisico: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqFechaVto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqConcParti: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqCliente: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqProveedor: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqEmpleado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    AfectaComis: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PropoImpAutom: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PropoEnInstancia: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    PropoModo: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarDesPlan: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    TarCanCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarCuoRedon: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TarDiaParAcre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarPorComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarCtaConPres: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TarCtaConLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CtaCaJDocCre: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    MutCtaConPres: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CtaCaJDebPre: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    MutCtaConLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MutCtaConComi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConfCotizDife: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ImpComprob: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ModImpresion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    AfeCtaCteClie: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    TipoDeCuenta: {
      type: DataTypes.STRING(17),
      allowNull: false,
      defaultValue: ""
    },
    FechaAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ControlChequera: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UltHojExtrac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroValorPorCta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IncluirEnPlaCaja: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IncluirEnPtoTrab: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TipCtrlUsuarios: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fcCueCaj',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_fCuCa",
        unique: true,
        fields: [
          { name: "CodCtaCaja" },
        ]
      },
      {
        name: "PorCtaContabe",
        unique: true,
        fields: [
          { name: "CodCuenta" },
          { name: "CodCtaCaja" },
        ]
      },
      {
        name: "PorDescripcion_fCuCa",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "PorEmpFinanc",
        fields: [
          { name: "CodEmpFin" },
        ]
      },
      {
        name: "PorEmpMutuales",
        fields: [
          { name: "CodMutual" },
        ]
      },
      {
        name: "PorEmpTarjeta",
        fields: [
          { name: "CodEmpTarjeta" },
        ]
      },
      {
        name: "PorTipo",
        fields: [
          { name: "TipCueCaja" },
          { name: "CodCtaCaja" },
        ]
      },
      {
        name: "xCodCuenta_fCuCa",
        fields: [
          { name: "CodCuenta" },
        ]
      },
    ]
  });
};
