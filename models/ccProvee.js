const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccProvee', {
    ManDeBien: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    CarEnviad: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    HisBloque: {
      type: DataTypes.STRING(1000),
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
    CodProvee: {
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
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Calle: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
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
    CodGruProv: {
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
    CodCreProv: {
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
    Aux_SaldoFinal: {
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
    CodCotiza: {
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
    RetGanancias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MostrarOberv: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecIniRete: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RetIIBB: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cod_CBU: {
      type: DataTypes.STRING(23),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ccProvee',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xActividad",
        unique: true,
        fields: [
          { name: "CodActivi" },
          { name: "RazSocial" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xCodActDGI",
        fields: [
          { name: "CodActDGI" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xCodDocumento",
        fields: [
          { name: "CodDocDGI" },
        ]
      },
      {
        name: "xCodigo_cProv",
        unique: true,
        fields: [
          { name: "CodProvee" },
        ]
      },
      {
        name: "xCredito",
        fields: [
          { name: "CodCreProv" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xGrupos",
        unique: true,
        fields: [
          { name: "CodGruProv" },
          { name: "RazSocial" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xLocalidad_cProv",
        fields: [
          { name: "CodLocali" },
        ]
      },
      {
        name: "xNroCuit",
        fields: [
          { name: "NumDocume" },
        ]
      },
      {
        name: "xProvincia_cProv",
        fields: [
          { name: "CodProvin" },
        ]
      },
      {
        name: "xPuntoDeVenta",
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xRazonSocial",
        fields: [
          { name: "RazSocial" },
        ]
      },
      {
        name: "xSitIVA",
        fields: [
          { name: "CodSitIVA" },
        ]
      },
      {
        name: "xSucursal_cProv",
        fields: [
          { name: "CodSucurs" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xTipEve_CodCli",
        fields: [
          { name: "TipEventu" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xVendedor",
        fields: [
          { name: "CodVended" },
          { name: "RazSocial" },
        ]
      },
      {
        name: "xZona_cProv",
        fields: [
          { name: "RazSocial" },
        ]
      },
    ]
  });
};
