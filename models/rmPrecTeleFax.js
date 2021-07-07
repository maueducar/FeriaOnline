const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rmPrecTeleFax', {
    Rubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Variedad: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Envase: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Tamano: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Marca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rmPrecTeleFax',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente_rPrTe",
        fields: [
          { name: "Cliente" },
        ]
      },
      {
        name: "xClieProdFechIdComp_rPrTe",
        unique: true,
        fields: [
          { name: "Cliente" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Fecha" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xCompNume_rPrTe",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "xFech_Clie_Prod_rPrTe",
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
        name: "xProducto_rPrTe",
        fields: [
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
        ]
      },
      {
        name: "xProduYComp_rPrTe",
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
    ]
  });
};
