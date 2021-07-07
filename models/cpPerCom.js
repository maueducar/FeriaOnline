const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cpPerCom', {
    NomProc: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesdeFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HastaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesdeCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescCliente1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescCliente2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Destino: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    SoloFacturas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SaltoEntreCtas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    OpcionSaldos: {
      type: DataTypes.STRING(29),
      allowNull: false,
      defaultValue: ""
    },
    SetDeCtasExclu: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    ProVtaPorClientes: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ProVtaAnalitico: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSucursDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeINV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    HastaINV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DesdeCodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeTipVinDesc: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    HastaCodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaTipVinDesc: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DesdeCodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeCenStoDesc: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    HastaCodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaCenStoDesc: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DesdeCosecha: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaCosecha: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cpPerCom',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNomProcUser",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdUsuario" },
        ]
      },
    ]
  });
};
