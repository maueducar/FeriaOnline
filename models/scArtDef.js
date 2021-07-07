const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtDef', {
    IdDefArti: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    DesAltern: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Aplicacion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRub: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodBarra: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    UsaVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UsaCompras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UsaProduc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SemElabor: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ProPropia: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    InvVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    InvOrdTra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    UniMedSto: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    UniEmpaqu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniMedCom: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    EquEnComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UtiPorcen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UtiPorcMayor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreProPon: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TolDifCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdePartid: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    GarCompra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DurGarCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GarVenta: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DurGarVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdeNumSer: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CueEnComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CueEnVent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPoolArti: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodColor: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    CodEnva: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodArtDelProvee: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    DesArtDelProveedor: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ReqDescripcion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTipArticulo: {
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
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecNoUso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodUsuNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomUsuNoUso: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    PPPCalculado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPManual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PropCanTotales: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PropCanNoInc: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    CodSeccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTempor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniMedida: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    RangoInicial: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    RangoFinal: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    CodFabrica: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCurva: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtDef',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtDescripcion_sDeAr",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "Descripcion" },
        ]
      },
      {
        name: "xCodArtDelProveed_sDeAr",
        unique: true,
        fields: [
          { name: "CodArtDelProvee" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodBarras_sDeAr",
        unique: true,
        fields: [
          { name: "CodBarra" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodFabrica_sDeAr",
        unique: true,
        fields: [
          { name: "CodFabrica" },
          { name: "Descripcion" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodigo_sDeAr",
        unique: true,
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xColor_sDeAr",
        fields: [
          { name: "CodColor" },
        ]
      },
      {
        name: "xDescripcion_sDeAr",
        unique: true,
        fields: [
          { name: "Descripcion" },
          { name: "IdDefArti" },
        ]
      },
      {
        name: "xEnvase_sDeAr",
        fields: [
          { name: "CodEnva" },
        ]
      },
      {
        name: "xIdDefArti_sDeAr",
        unique: true,
        fields: [
          { name: "IdDefArti" },
        ]
      },
      {
        name: "xPoolArti_sDeAr",
        fields: [
          { name: "CodPoolArti" },
        ]
      },
      {
        name: "xRubros_sDeAr",
        unique: true,
        fields: [
          { name: "CodRubro" },
          { name: "CodSubRub" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xSeccion_sDeAr",
        unique: true,
        fields: [
          { name: "CodSeccion" },
          { name: "Descripcion" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xTempor_sDeAr",
        unique: true,
        fields: [
          { name: "CodTempor" },
          { name: "Descripcion" },
          { name: "CodArticu" },
        ]
      },
    ]
  });
};
