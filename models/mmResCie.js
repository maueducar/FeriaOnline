const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mmResCie', {
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
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDeCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecCierre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MovFecDesde: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MovFecHasta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecEmision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CobResDesdeFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CobResHastaFec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VtoResumenes: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IntPorMora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanSocios: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanComercios: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotConsumo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotComisComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotResumenes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TxtAlPie: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    VtoAnterior: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CieAnterior: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VtoProximo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CieProximo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CobIdealAEC: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CantRegAEC: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CobAEC_Gene: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntPorMoraAdhe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IntPorMoraJubi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mmResCie',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFecCierre_mReCi",
        unique: true,
        fields: [
          { name: "FecCierre" },
          { name: "NroDeCierre" },
        ]
      },
      {
        name: "xNroCierre_mCaCi",
        unique: true,
        fields: [
          { name: "NroDeCierre" },
        ]
      },
      {
        name: "xNumLote_mReCi",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NumLote" },
          { name: "NroDeCierre" },
        ]
      },
    ]
  });
};
