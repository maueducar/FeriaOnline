const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmComArt', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
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
    Id_Registro: {
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
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodBarra: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumPartida: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NumSerie: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: ""
    },
    Unidades: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanBultos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreFinLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorBonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BonifFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IVA_RNI: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreFinalUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilA_Est: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ConcilA_Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilA_Conformado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilA_Pend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Est: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ConcilPor_Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Conformado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Pend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagMark: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
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
    Buf_IdContraReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Buf_IdContraComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEmpaqu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BaseImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComisionBase: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComisionPorDif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorComisionPorDif: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubNetoDeLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DifNetoLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisPagadaImp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisPagadaParte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisPagadaEstado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ProrrateoDtoPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ProrrateoFlete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreNetLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreFinalLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreFinalUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtProrrateoDtoPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtProrrateoFlete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DerivPorDef: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CabDeDef: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ClaveDeRefer: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    StoReaArticulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StoComArticu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StoDispArticu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosEntSal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_porc_mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_mes_a_pag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_porc_pag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_res_pag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_mes_pag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_res_pag_suma: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vec_res_min: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vmComArt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xArticulo_vCoAr",
        fields: [
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xCentroDeStock_vCoArt",
        fields: [
          { name: "CodCenSto" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xCodArticu_vCoAr",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodCenSto_vCoAr",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xComIdReg_vCoAr",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xComprobante_vCoAr",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xComprobante_vCoAr_2",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFecComprob",
        fields: [
          { name: "FecCompro" },
        ]
      },
      {
        name: "xIdComprob_vCoAr",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xNumSCenSFec_vCoAr",
        fields: [
          { name: "NumSerie" },
          { name: "CodCenSto" },
          { name: "FecCompro" },
          { name: "HorComprob" },
        ]
      },
    ]
  });
};
