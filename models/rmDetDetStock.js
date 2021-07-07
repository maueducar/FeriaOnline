const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rmDetDetStock', {
    Comprobante: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
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
    Year: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Dia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Minutos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Segundos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Linea: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Camara: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    EntradaSalida: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'rmDetDetStock',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCamara_DetD",
        fields: [
          { name: "Camara" },
        ]
      },
      {
        name: "PorComprobante_DetD",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Year" },
          { name: "Mes" },
          { name: "Dia" },
          { name: "Linea" },
        ]
      },
      {
        name: "PorEnvase_DetD",
        fields: [
          { name: "Envase" },
        ]
      },
      {
        name: "PorLinea_DetD",
        fields: [
          { name: "Linea" },
        ]
      },
      {
        name: "PorMarca_DetD",
        fields: [
          { name: "Marca" },
        ]
      },
      {
        name: "PorProducto_DetD",
        unique: true,
        fields: [
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Year" },
          { name: "Mes" },
          { name: "Dia" },
          { name: "Hora" },
          { name: "Minutos" },
          { name: "Segundos" },
          { name: "Linea" },
          { name: "EntradaSalida" },
        ]
      },
      {
        name: "PorRubro_DetD",
        fields: [
          { name: "Rubro" },
        ]
      },
      {
        name: "PorTamano_DetD",
        fields: [
          { name: "Tamano" },
        ]
      },
      {
        name: "PorVariedad_DetD",
        fields: [
          { name: "Variedad" },
        ]
      },
      {
        name: "xComprobante_DetD",
        fields: [
          { name: "Comprobante" },
        ]
      },
      {
        name: "xNumeroComprobante_DetD",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "xProducto_DetD",
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
