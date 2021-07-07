const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scCenSto', {
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ReaVirtual: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    ComProduc: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ComVentas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PenRecepcion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEnti: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Habilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    HabTransfer: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scCenSto',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodEnti_sCeSt",
        fields: [
          { name: "CodEnti" },
        ]
      },
      {
        name: "xCodigo_sCeSt",
        unique: true,
        fields: [
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xCodSucurs_sCeSt",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xDescripcion_sCeSt",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xEntiCent",
        unique: true,
        fields: [
          { name: "CodEnti" },
          { name: "CodCenSto" },
        ]
      },
      {
        name: "xSucCenSto",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodCenSto" },
        ]
      },
    ]
  });
};
