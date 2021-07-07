const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rmLiquidacion', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Rubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Variedad: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Envase: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Tamano: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Marca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Comprobante: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaLiq: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PrecioUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComVentas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValCosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CosFlete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rmLiquidacion',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCgoComprob_rLiqui",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCliente_rLiqui",
        fields: [
          { name: "Cliente" },
        ]
      },
      {
        name: "xClienteProducto_rLiqui",
        fields: [
          { name: "Cliente" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xComprob_rLiqui",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "xFech_Clie_Prod_rLiqui",
        fields: [
          { name: "Cliente" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "FechaLiq" },
        ]
      },
      {
        name: "xIdComprob_rLiqui",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xProducto_rLiqui",
        fields: [
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "xProducto2_c",
        fields: [
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
        ]
      },
    ]
  });
};
