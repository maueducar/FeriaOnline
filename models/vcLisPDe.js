const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcLisPDe', {
    TipVenCom: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumLisPre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Vigente: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    PreSinIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreTermin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComisEspecial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDeProveedor: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DesDeProveedor: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodDescuento: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComision: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Observacion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    PrePorBultos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecUltActualiz: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorUltActualiz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UsuUltActualiz: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    PreSinIVARepo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreTerminRepo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descuento1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descuento2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descuento3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descuento4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesDtosSus: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CostPredeter: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CompEsPreUniUSD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CompImporPreUniUSD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UtiPorcen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HabModPrecio: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcLisPDe',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xArtDescripcion_vLiPD",
        fields: [
          { name: "CodArticu" },
          { name: "Descripcion" },
        ]
      },
      {
        name: "xArtLisPrecio",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "CodSucurs" },
          { name: "NumLisPre" },
        ]
      },
      {
        name: "xCodComision",
        fields: [
          { name: "CodComision" },
        ]
      },
      {
        name: "xCodDeArtDelProvee",
        fields: [
          { name: "CodDeProveedor" },
          { name: "CodSucurs" },
          { name: "NumLisPre" },
        ]
      },
      {
        name: "xCodDescuento",
        fields: [
          { name: "CodDescuento" },
        ]
      },
      {
        name: "xCodigo_vLiPD",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodRubro_vLiPD",
        fields: [
          { name: "CodRubro" },
        ]
      },
      {
        name: "xCodSucrs_NumLisPre_vLiPD",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
        ]
      },
      {
        name: "xLisPreArticulo",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xLisPreDescr",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "Descripcion" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xLisPreRubro",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "CodRubro" },
          { name: "Descripcion" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xNumero_vLiPD",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "NumLisPre" },
          { name: "CodArticu" },
        ]
      },
      {
        name: "xRubro_vLiPD",
        fields: [
          { name: "CodRubro" },
          { name: "CodSubRubro" },
        ]
      },
    ]
  });
};
