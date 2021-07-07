const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtDcS', {
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StoMinimo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    StoMaximo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PunPedido: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ExiFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IngEnTransito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EgrEnTransito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ExiEnTransito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ResPorPro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ResPorVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PenDeRece: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ExiDispon: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreProPonderado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecUltCalPPP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UniFacSemAnt_1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacSemAnt_2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacSemAnt_3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacSemAnt_4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacMesAnt_1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacMesAnt_2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniFacMesAnt_3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComSemAnt_1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComSemAnt_2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComSemAnt_3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComSemAnt_4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComMesAnt_1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComMesAnt_2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniComMesAnt_3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPManual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PPPCalculado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SaldoTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'scArtDcS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtiCenStock",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xCenStockArticulo",
        unique: true,
        fields: [
          { name: "CodCenSto" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCenStockRubro",
        unique: true,
        fields: [
          { name: "CodCenSto" },
          { name: "CodRubro" },
          { name: "CodSubRubro" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodArticu_sArDC",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodCenSto_sArDC",
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xCodRubro_sArDC",
        fields: [
          { name: "CodRubro" },
        ]
      },
      {
        name: "xRubro_sArDC",
        unique: true,
        fields: [
          { name: "CodRubro" },
          { name: "CodSubRubro" },
          { name: "CodArticu" },
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xRubro_sArDC_2",
        fields: [
          { name: "CodRubro" },
          { name: "CodSubRubro" },
        ]
      },
    ]
  });
};
