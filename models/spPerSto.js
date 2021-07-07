const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spPerSto', {
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
    CodCenSto1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu1: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodArticu2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodRubro1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRubro2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    CodPunVenDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConsultaPorQuery: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'spPerSto',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNomProcUser_spPeSt",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdUsuario" },
        ]
      },
    ]
  });
};
