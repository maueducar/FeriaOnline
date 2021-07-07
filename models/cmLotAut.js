const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmLotAut', {
    IdLotComAut: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecLote: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UserName: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
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
    FileImport: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    CasoImport: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    RegTotales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RegFactur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RegNoFactur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RegIncons: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpNetFactur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpFinFactur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpNetNoFactur: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'cmLotAut',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFecha_cLoAu",
        unique: true,
        fields: [
          { name: "FecLote" },
          { name: "IdLotComAut" },
        ]
      },
      {
        name: "xIdLote_cLoAu",
        unique: true,
        fields: [
          { name: "IdLotComAut" },
        ]
      },
    ]
  });
};
