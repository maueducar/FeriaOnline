const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umRetGan', {
    AnioRet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    MesRet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    HabRemun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HabNoRemun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Remun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetLey: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetGen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Deduc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GanaciaNetaAcum: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DeduComputables: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GanAcuSujetaImpuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RetAcumulada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BaseImponible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalRetenerMes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'umRetGan',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xAnioMesLeg_uReGa",
        unique: true,
        fields: [
          { name: "AnioRet" },
          { name: "MesRet" },
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xIdLegAnioMes_uReGa",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "AnioRet" },
          { name: "MesRet" },
        ]
      },
    ]
  });
};
