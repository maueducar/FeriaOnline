const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcClient', {
    ManDeBien: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    CarEnviad: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: ""
    },
    HisBloque: {
      type: DataTypes.STRING(2000),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones: {
      type: DataTypes.STRING(4000),
      allowNull: false,
      defaultValue: ""
    },
    TipEventu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CuentaConsignacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RazSocial: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Calle: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    CodActivi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomFantas: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    Contacto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    NroFax: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    E_Mail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPais: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGruCli: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDocDGI: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipDocume: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodActDGI: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCobrador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSitIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumIngBru: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    SitIngBru: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HayObserv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    HayManBie: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    HayCarEnv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecPriFac: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecUltFact: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecUltPag: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CanCheRec: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UltCheRec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodCreCli: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CueBloque: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecBloque: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecInhabi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CueInhabi: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ComVentas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_SaldoInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_SumaDebitos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_SumaCreditos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_DifDebCre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_SaldoFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValUniCarga: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Lpre_CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Lpre_NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComiPorVta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComiPorCobr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodConVen: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCanal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArea: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCategoria: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ReqFacBulEnt: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PerFacBulEstricto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodResponsable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodAgrupacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCotiza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FormaPago: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DtoMaxPorItems: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DtoMaxAlPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisionXOrdenes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisionXAnticipos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cod_CBU: {
      type: DataTypes.STRING(23),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCaja2: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCaja3: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodEmpFin1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFin2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFin3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecDeAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodPlan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPerIIBB: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroContrato: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    LimDiaFacPendiente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodForPag: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodMotBaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodVended2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended5: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision5: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe5: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DtoMaxRubros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RubrosDtosMaximo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    LimVentaMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDepa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcClient',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xActividad_vClie",
        fields: [
          { name: "CodActivi" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xCodActDGI_vClie",
        fields: [
          { name: "CodActDGI" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xCodActDGI_vClie_2",
        fields: [
          { name: "CodActDGI" },
        ]
      },
      {
        name: "xCodActivi_vClie",
        fields: [
          { name: "CodActivi" },
        ]
      },
      {
        name: "xCodAgrupacion",
        fields: [
          { name: "CodAgrupacion" },
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodAgrupacion_vClie",
        fields: [
          { name: "CodAgrupacion" },
        ]
      },
      {
        name: "xCodCreCli_vClie",
        fields: [
          { name: "CodCreCli" },
        ]
      },
      {
        name: "xCodDocumento_vClie",
        fields: [
          { name: "CodDocDGI" },
        ]
      },
      {
        name: "xCodGruCli_vClie",
        fields: [
          { name: "CodGruCli" },
        ]
      },
      {
        name: "xCodigo_vClie",
        unique: true,
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodResponsable",
        fields: [
          { name: "CodResponsable" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xCodResponsable_vClie",
        fields: [
          { name: "CodResponsable" },
        ]
      },
      {
        name: "xCodSucurs_vClie",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xCodVended_vClie",
        fields: [
          { name: "CodVended" },
        ]
      },
      {
        name: "xCredito_vClie",
        fields: [
          { name: "CodCreCli" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xGrupos_vClie",
        fields: [
          { name: "CodGruCli" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xLocalidad_vClie",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xNroCuit_vClie",
        fields: [
          { name: "NumDocume" },
        ]
      },
      {
        name: "xProvincia_vClie",
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xPuntoDeVenta_vClie",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xRazonSocial_vClie",
        fields: [
          { name: "RazSocial" },
        ]
      },
      {
        name: "xSitIVA_vClie",
        fields: [
          { name: "CodSitIVA" },
        ]
      },
      {
        name: "xSucursal_vClie",
        fields: [
          { name: "CodSucurs" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xTipEve_CodCli_vClie",
        fields: [
          { name: "TipEventu" },
          { name: "CodCliente" },
        ]
      },
      {
        name: "xVendedor_vClie",
        fields: [
          { name: "CodVended" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xZona_vClie",
        fields: [
          { name: "RazSocial" },
        ]
      },
    ]
  });
};
