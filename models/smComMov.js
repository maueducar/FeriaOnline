const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('smComMov', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenLot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComSto: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
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
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCompro: {
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
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanBultos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUniNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUniFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_ModOri: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PPP_ExisAnt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_PrUnAnterior: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_ExisAntValoriz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_MovActValoriz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_ExisFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_ExisFinValoriz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPP_PrUnFinal: {
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
    CodEmpl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comentario: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoInvent: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Otro_IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Otro_IdMovim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosEntSal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'smComMov',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtiCentStock_sCoMo",
        fields: [
          { name: "CodArticu" },
          { name: "CodCenSto" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xArticulo_sCoMo",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xCenStoEstInven_sCoMo",
        unique: true,
        fields: [
          { name: "CodCenSto" },
          { name: "EstadoInvent" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xCenStoFecha_sCoMo",
        unique: true,
        fields: [
          { name: "CodCenSto" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xCentroDeStock_sCoMo",
        fields: [
          { name: "CodCenSto" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xCodArticu_sCoMo",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodCenSto_sCoMo",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xComprobante_sCoMo",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "CodComSto" },
          { name: "VisCompro" },
          { name: "IdCompro" },
          { name: "CodArticu" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xComprobante_sComo_2",
        fields: [
          { name: "CodTalona" },
          { name: "CodComSto" },
          { name: "VisCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIdComprob_sCoMo",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xLoteDeComp",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVenLot" },
          { name: "NumLote" },
          { name: "CodComSto" },
          { name: "VisCompro" },
        ]
      },
      {
        name: "xNumOT_sCoMo",
        fields: [
          { name: "NumOT" },
          { name: "CodArticu" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
      {
        name: "xNumSCenSFec_sCoMo",
        fields: [
          { name: "NumSerie" },
          { name: "CodCenSto" },
          { name: "FecCompro" },
          { name: "HoraCompro" },
        ]
      },
    ]
  });
};
