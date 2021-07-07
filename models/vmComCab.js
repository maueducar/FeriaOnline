const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmComCab', {
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
    FecContable: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComVta: {
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
    VisLibCompro: {
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
    CodCliente: {
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
    FecLiqComision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVenComision: {
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
      type: DataTypes.STRING(31),
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
    RtoA_CodDefCom: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    RtoA_LetCompro: {
      type: DataTypes.STRING(20),
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
    RtoA_IdCompro: {
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
    ContIDdeDetalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpuEditados: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    OpeQueAutorizo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodConVen: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CliEv_RazSocial: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    CliEv_TipDocume: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CliEv_NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CliEv_CodSitIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CliEv_SitIngBru: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CliEv_Domicilio: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodTxtPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVenComis: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqEnPeriodo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LiqComEstado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    BasImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BasImpComiLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisEspecial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DeveComisionImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DeveComisionLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DeveComisionBaseImp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    MonExtSubGravado: {
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
    Fc_DiasPromPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fc_DiasPromAcrePago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fc_DiasPromPorcPaga: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_ConfCoti: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    MonExt_DifCotiGene: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Exp_DesFinal: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_OrdCompra: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_AgeCarga: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_PueCarga: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_ViaTransp: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_PueDescarga: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_OrdProd: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Exp_PesBruto: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NroSalCamara: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MedCantid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PieCantid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EspCantid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MedKilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PieKilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EspKilos: {
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
    ClaveDeRefer: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    AnuAutomat: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroImpres: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCopia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDeContrato: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    SubNroDeContrato: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CodUni: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Hskm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HskmFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantHorasTaller: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantHorasTallerCompu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEntregaATaller: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecEntregaAAdmin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstMantServ: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CAE: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CAEFechVto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AfipConcepto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    AfipFecServD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AfipFecServH: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipTranspCM: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmComCab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCliente_vCoCa",
        fields: [
          { name: "CodCliente" },
          { name: "FecComprob" },
          { name: "CodComVta" },
        ]
      },
      {
        name: "xCliEstCompensF_vCoCa",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "EstadoCompensacion" },
          { name: "FecComprob" },
          { name: "DebeHaber" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCliEstCompMonExt",
        fields: [
          { name: "CodCliente" },
          { name: "MonExtEstadoCompens" },
          { name: "FecComprob" },
        ]
      },
      {
        name: "xCliEstConcil_vCoCa",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "EstConciliacion" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCliEstConcilAOtros",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "EstConcil_AOtros" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xClieVencimiento_vCoCa",
        fields: [
          { name: "CodCliente" },
          { name: "FechaDeVto" },
        ]
      },
      {
        name: "xCliFecHorId_vCoCa",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "FecComprob" },
          { name: "HorComprob" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCodCliente_vCoCa",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodComVta_vCoCa",
        fields: [
          { name: "CodComVta" },
        ]
      },
      {
        name: "xComprobante_vCoCa",
        unique: true,
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xEstadoCompensYCompr_vCoCa",
        fields: [
          { name: "CodCliente" },
          { name: "EstadoCompensacion" },
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xEstConcil",
        fields: [
          { name: "EstConciliacion" },
          { name: "FecComprob" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xFecContable",
        fields: [
          { name: "FecContable" },
        ]
      },
      {
        name: "xFechaCompr_vCoCa",
        fields: [
          { name: "FecComprob" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xIdComprob_vCoCa",
        unique: true,
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xLoteComprobante_vCoCa",
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xLoteComprobante_vCoCa_2",
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
        ]
      },
      {
        name: "xNroTransaccion_vCoCa",
        fields: [
          { name: "VisTransa" },
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xTalonario_vCoCa",
        fields: [
          { name: "CodTalona" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xUsuario_vCoCa",
        fields: [
          { name: "Audit_CodUsuario" },
          { name: "Audit_Fecha" },
          { name: "Audit_Hora" },
        ]
      },
      {
        name: "xVendEstLiqComi",
        fields: [
          { name: "CodVenComis" },
          { name: "LiqComEstado" },
          { name: "LiqEnPeriodo" },
        ]
      },
    ]
  });
};
