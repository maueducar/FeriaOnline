const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefTMa', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    NroTalonario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodVendCobr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Habilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecHabilitacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecTerminacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NroCAI: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    VtoCAI: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vcDefTMa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodTalNumero_vDeTM",
        unique: true,
        fields: [
          { name: "CodTalona" },
          { name: "NroTalonario" },
        ]
      },
      {
        name: "xVendCobr_vDeTM",
        unique: true,
        fields: [
          { name: "CodVendCobr" },
          { name: "CodTalona" },
          { name: "NroTalonario" },
        ]
      },
    ]
  });
};
