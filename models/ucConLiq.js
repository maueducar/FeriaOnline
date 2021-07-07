const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ucConLiq', {
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesConLiquid: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TipoConcepto: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    IDLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoLiquidacion: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IDPeriodicidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Periodicidad: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IDVigencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Vigencia: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IDDatAdicional: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DatAdicional: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    IDDatVerMostCant: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DatVerMostCant: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    ValGenerico: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CompFormula: {
      type: DataTypes.CHAR(5000),
      allowNull: false,
      defaultValue: ""
    },
    HabParaUsar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CalculaRetGan: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_SaAd: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_SAC: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_IHEx: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_Lice: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_DTra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_CHEx: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_CNRe: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Sicoss_HTra: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ReqConcPartic: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ImpCombinado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ucConLiq',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodConLiq_uCoLi",
        unique: true,
        fields: [
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xDesConLiq_uCoLi",
        fields: [
          { name: "DesConLiquid" },
        ]
      },
    ]
  });
};
