const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmComCab', {
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
    NroCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NumTransa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    CodProvee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Domi_NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Eve_CodCliCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Eve_NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    Eve_TipDocume: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Anulado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaDeVto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecLiqComision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTraFle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenStoDest: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    FecOperacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorOperacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    No: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SucLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubBruNoGrav: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubBruGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorDescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpDescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubFinNoGrav: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubFinGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorFlete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpFlete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IvaGeneral: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IVA_RNI: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubSobretasas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoCobrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Condicion: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    NroVencimientos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCompensado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpSinCompensar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoCompensacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Intereses: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVenComis: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BasImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqEnPeriodo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RtoA_CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    RtoA_LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    RtoA_PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RtoA_NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RtoA_CajIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AuxImpHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SaldoFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CajCodCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CajCodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CajLetComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CajPunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CajNumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CajIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Audit_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ContIDdeDetalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstConciliacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EstConcil_AOtros: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTxtPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstAvisoCompra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodProcec: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodAgen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMata: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodConVen: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    MonExtTotComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubBruGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtImpDescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtNetoCobrado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCotiza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtImpCompensado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtImpSinComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtEstadoCompens: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    MonExt_Cotizacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_ConfCoti: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CantCabeHacienda: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDest: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntImpPorcent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntImpVtoIni: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IntImpCantVtos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntImpSumImpInte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntImp_SumaImpCapit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SumImpBonifPorItems: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CheckSum: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroNotPedido: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Concil_IdComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concil_TipNro: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Concilier_IdComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concilier_TipNro: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FlagReteGan: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdOpReteGan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagReteIB: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdOpReteIB: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagReteIVA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdOpReteIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDeContrato: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CodCanCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCotizacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstCotizacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroCAI: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Cosecha: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotKilosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TenAzuVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosVinoElab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosVinoDedu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotKilosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TenAzuMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosMostoElab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosMostoDedu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitrosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CAE: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CAEFechVto: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cmComCab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCliEstCompensF",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "EstadoCompensacion" },
          { name: "FecComprob" },
          { name: "DebeHaber" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCodComComp_cCoCa",
        fields: [
          { name: "CodComComp" },
        ]
      },
      {
        name: "xCodProvee_cCoCa",
        fields: [
          { name: "CodProvee" },
        ]
      },
      {
        name: "xCodProvFecContab",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "FecContab" },
          { name: "CodComComp" },
          { name: "VisCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCodTalona_cCoCa",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xComprobante_cCoCa",
        unique: true,
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xEstadoAvisoCompra",
        fields: [
          { name: "EstAvisoCompra" },
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xEstadoCompensYCompr",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "EstadoCompensacion" },
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFechaCompr",
        fields: [
          { name: "FecComprob" },
        ]
      },
      {
        name: "xIdComprob_cCoCa",
        unique: true,
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xLoteComprobante",
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
          { name: "CodTalona" },
          { name: "LetCompro" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xLoteComprobante_cCoCa_2",
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xNroNotPedido",
        fields: [
          { name: "NroNotPedido" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xNroTransaccion",
        fields: [
          { name: "VisTransa" },
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xProEstCompMonExt",
        fields: [
          { name: "CodProvee" },
          { name: "MonExtEstadoCompens" },
          { name: "FecComprob" },
        ]
      },
      {
        name: "xProveedor",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "FecComprob" },
          { name: "CodComComp" },
          { name: "VisCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xProvEstConcil",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "EstConciliacion" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xProvEstConcilAOtros",
        unique: true,
        fields: [
          { name: "CodProvee" },
          { name: "EstConcil_AOtros" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xProvEstConcilPorOtros",
        fields: [
          { name: "CodProvee" },
          { name: "EstConciliacion" },
        ]
      },
      {
        name: "xProvNroRemito",
        fields: [
          { name: "CodProvee" },
          { name: "RtoA_NumCompro" },
        ]
      },
      {
        name: "xProvNumero",
        fields: [
          { name: "NumCompro" },
          { name: "CodProvee" },
        ]
      },
      {
        name: "xProvVencimiento",
        fields: [
          { name: "CodProvee" },
          { name: "FechaDeVto" },
          { name: "CodComComp" },
          { name: "VisCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xTalonario",
        fields: [
          { name: "CodTalona" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xUsuario",
        fields: [
          { name: "Audit_CodUsuario" },
          { name: "Audit_Fecha" },
          { name: "Audit_Hora" },
        ]
      },
    ]
  });
};
