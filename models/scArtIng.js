const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtIng', {
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CasoValoriz: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ValCosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactGanan: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCove: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    COVE: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreManObra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanMaterial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesMaterial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipMaterial: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PreCotizUnit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValMaterial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCotiza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCotizaVta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesoArticulo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Etiqueta: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodFactor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecModi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ImpCotizacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CompraPesDol: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtIng',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodArticu_sArIn",
        unique: true,
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xPesoArt_sArIn",
        unique: true,
        fields: [
          { name: "PesoArticulo" },
          { name: "CodArticu" },
        ]
      },
    ]
  });
};
