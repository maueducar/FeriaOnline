const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLiqLeC', {
    NroLiquidacion: {
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
    Estado: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    TotalRemun: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalExentos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalRetenc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoCob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Impreso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SueldoJornal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesCenCos: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCaliProf: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesCalifProf: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCatego: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesCatego: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodSeccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesSeccion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodObrSocial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesObrSocial: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodSindicato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesSindicato: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodLugPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesLugPago: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLiqLeC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegajo_uLiLC",
        fields: [
          { name: "IdLegajo" },
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xIdLegLiCOnly_uLiLC",
        fields: [
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xLiqEstado_uLiLC",
        fields: [
          { name: "NroLiquidacion" },
          { name: "Estado" },
        ]
      },
      {
        name: "xNroLiqOnly_uLiLC",
        fields: [
          { name: "NroLiquidacion" },
        ]
      },
      {
        name: "xNroLiquid_uLiLC",
        unique: true,
        fields: [
          { name: "NroLiquidacion" },
          { name: "IdLegajo" },
        ]
      },
    ]
  });
};
