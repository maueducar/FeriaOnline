const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmComArt', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComComp: {
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
    Cantidad: {
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
    PreFinalUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubFinal: {
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
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    FlagMark: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
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
    Unidades: {
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
    MonExtPreNetLista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_Iva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    TiePreLista: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PrePorBultos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cmComArt',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArticulo",
        fields: [
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xCentroDeStock",
        fields: [
          { name: "CodCenSto" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HorComprob" },
        ]
      },
      {
        name: "xCodArticu_cCoAr",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodSenSto_cCoAr",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xComIdReg",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xComprobante",
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xComprobante_cCoAr_2",
        unique: true,
        fields: [
          { name: "CodComComp" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xFechComprob",
        fields: [
          { name: "FecCompro" },
        ]
      },
      {
        name: "xIdComprob_cCoAr",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xIdComprob_cCoAr_2",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNumSCenSFec",
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
