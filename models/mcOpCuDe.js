const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcOpCuDe', {
    CodOpcion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroOpcion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpFIjoCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcInteresTot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TmpConsCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TmpConsTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipSistema: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    GenCuotas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
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
    }
  }, {
    sequelize,
    tableName: 'mcOpCuDe',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodOpCuota_mOpCD",
        unique: true,
        fields: [
          { name: "CodOpcion" },
          { name: "NroOpcion" },
        ]
      },
    ]
  });
};
