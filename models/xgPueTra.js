const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xgPueTra', {
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesPueTrab: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreCompras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreFondos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCreProducc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierre: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierreVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierreCompras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierreFondos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierreStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SyncCierreProducc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    OriCalcSaldos: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    PueTraExterno: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecIni_UltInteg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecFin_UltInteg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecUltimaInteg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OriDatIntegracion: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    CeckVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckCompras: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckFondos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckContab: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckAbasto: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckEmpaq: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CeckProduc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xgPueTra',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodidoPuesto",
        unique: true,
        fields: [
          { name: "CodPueTrab" },
        ]
      },
      {
        name: "xDescripcion_xPuTr",
        fields: [
          { name: "DesPueTrab" },
        ]
      },
    ]
  });
};
