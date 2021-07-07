const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmComOrd', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PunVenLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisLote: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    NumOrden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Emision_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Emision_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Emision_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Emision_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Anulado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Carga_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Carga_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Carga_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Carga_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaConsumo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TotalConsumo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodClienteComercio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCuotasComercio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MesAfectacionCliente: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MesAfectacionComercio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ComisionHabitual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisEspecial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Validado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Id_CompDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipNro_CompDebito: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Id_CompCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipNro_CompCredito: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    TipoCredito: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ImpCapital: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoCuota: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmComOrd',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente_vCoOr",
        fields: [
          { name: "CodCliente" },
          { name: "NumOrden" },
        ]
      },
      {
        name: "xComprobante_vCoOr",
        unique: true,
        fields: [
          { name: "NumOrden" },
        ]
      },
      {
        name: "xIdCompCre_vCoOr",
        fields: [
          { name: "Id_CompCredito" },
        ]
      },
      {
        name: "xIdCompDeb_vCoOr",
        fields: [
          { name: "Id_CompDebito" },
        ]
      },
      {
        name: "xNroLote_vCoOr",
        fields: [
          { name: "CodSucurs" },
          { name: "PunVenLote" },
          { name: "NumLote" },
          { name: "NumOrden" },
        ]
      },
    ]
  });
};
