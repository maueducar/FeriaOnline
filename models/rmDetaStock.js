const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rmDetaStock', {
    Comprobante: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
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
      defaultValue: 0
    },
    Mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Linea: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantAjustada: {
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
      defaultValue: ""
    },
    PesoTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_CantSaldoInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_CantIngresos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_CantEgresos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_CantSaldoFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_KilosSaldoInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_KilosIngresos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_KilosEgresos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Aux_KilosSaldoFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaContable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
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
    },
    ObservaAjustes: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rmDetaStock',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCamara_Dstk",
        fields: [
          { name: "Camara" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
          { name: "Year" },
          { name: "Mes" },
          { name: "Dia" },
        ]
      },
      {
        name: "PorComprobante_Dstk",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "PorEnvase_Dstk",
        fields: [
          { name: "Envase" },
        ]
      },
      {
        name: "PorLinea_Dstk",
        fields: [
          { name: "Linea" },
          { name: "Year" },
          { name: "Mes" },
          { name: "Dia" },
          { name: "Rubro" },
          { name: "Variedad" },
          { name: "Envase" },
          { name: "Tamano" },
          { name: "Marca" },
        ]
      },
      {
        name: "PorMarca_Dstk",
        fields: [
          { name: "Marca" },
        ]
      },
      {
        name: "PorProducto_Dstk",
        fields: [
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
        name: "PorRubro_Dstk",
        fields: [
          { name: "Rubro" },
        ]
      },
      {
        name: "PorTamano_Dstk",
        fields: [
          { name: "Tamano" },
        ]
      },
      {
        name: "PorVariedad_Dstk",
        fields: [
          { name: "Variedad" },
        ]
      },
      {
        name: "xCamara_Dstk",
        fields: [
          { name: "Camara" },
        ]
      },
      {
        name: "xComprobante_Dstk",
        fields: [
          { name: "Comprobante" },
        ]
      },
      {
        name: "xCtaCble",
        fields: [
          { name: "CodCtaContable" },
        ]
      },
      {
        name: "xLinea_Dstk",
        fields: [
          { name: "Linea" },
        ]
      },
      {
        name: "xProducto_Dstk",
        unique: true,
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
        name: "xProducto2_Dstk",
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
