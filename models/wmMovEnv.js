const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wmMovEnv', {
    NroTicket: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenStock: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEnvase: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesoEnvases: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoIdealProd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoIPromedioProd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EntSalido: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    PesoEnvVacio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Ideal_NetoxEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Ideal_NetoProd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Ideal_PorcenDelNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Pesada_NetoxEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Pesada_NetoProd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Diferencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnitLiquidar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLiquidar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstLiquidacion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Asignado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IdComEnCompras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wmMovEnv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCentStk_mMoEn",
        fields: [
          { name: "CodCenStock" },
        ]
      },
      {
        name: "xEnvase_mMoEn",
        fields: [
          { name: "CodEnvase" },
        ]
      },
      {
        name: "xTicket_mMoEn",
        fields: [
          { name: "NroTicket" },
          { name: "EntSalido" },
        ]
      },
      {
        name: "xTicketYIdReg_mMoEn",
        unique: true,
        fields: [
          { name: "NroTicket" },
          { name: "Id_Registro" },
        ]
      },
    ]
  });
};
