const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omAsiCaR', {
    IdRegResumen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodCarpeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumAsient: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoAsiento: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    ConAsient: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    FecContab: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OriModulo: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    OriCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriCodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriNroDeLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdRegDetalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotDebe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotHaber: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omAsiCaR',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCarpFecha_oAsCaR",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "FecContab" },
          { name: "NumAsient" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xCarpNumAsient_oAsCaR",
        unique: true,
        fields: [
          { name: "CodCarpeta" },
          { name: "NumAsient" },
          { name: "VisTransa" },
        ]
      },
      {
        name: "xIdAsiento_oAsCaR",
        unique: true,
        fields: [
          { name: "VisTransa" },
        ]
      },
      {
        name: "xIdResum_oAsCaR",
        fields: [
          { name: "IdRegResumen" },
        ]
      },
      {
        name: "xIdResumNumAs_oAsCaR",
        unique: true,
        fields: [
          { name: "IdRegResumen" },
          { name: "NumAsient" },
          { name: "VisTransa" },
        ]
      },
    ]
  });
};
