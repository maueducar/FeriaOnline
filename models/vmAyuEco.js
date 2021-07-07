const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmAyuEco', {
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
    VisLote: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    IdComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodComprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodPunVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumAyuEco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Estado: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    FecEmision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SisAmortiz: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodSocio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TasIntMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CapAyuda: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DedSellado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DedGasAdmin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DedFonGaran: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonRetCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecPriVencim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CuoMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AdiPriCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BiePrenda: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    ValPrenda: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BieHipoteca: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    ValHipoteca: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesAyuda: {
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: ""
    },
    FecVencim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Moneda: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    DocGarante1: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    DocGarante2: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    CodGarante1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGarante2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGarante3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DocGarante3: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    NomGarante1: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    NomGarante2: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    NomGarante3: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    Usuario: {
      type: DataTypes.STRING(15),
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
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotIntereses: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CuoSocial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodOpcion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vmAyuEco',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodSocio_vAyEc",
        unique: true,
        fields: [
          { name: "CodSocio" },
          { name: "IdComprob" },
        ]
      },
      {
        name: "xEstado_vAyEc",
        unique: true,
        fields: [
          { name: "Estado" },
          { name: "IdComprob" },
        ]
      },
      {
        name: "xFecEmision_vAyEc",
        unique: true,
        fields: [
          { name: "FecEmision" },
          { name: "IdComprob" },
        ]
      },
      {
        name: "xIdCompro_vAyEc",
        unique: true,
        fields: [
          { name: "IdComprob" },
        ]
      },
      {
        name: "xNroComprob_vAyEc",
        unique: true,
        fields: [
          { name: "CodComprob" },
          { name: "NumAyuEco" },
          { name: "IdComprob" },
        ]
      },
      {
        name: "xNroLote_vAyEc",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
          { name: "IdComprob" },
        ]
      },
    ]
  });
};
