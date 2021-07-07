const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmHomLot', {
    IdLotHomolog: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecHomolog: {
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
    CodComIngNSE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComRtoTran: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComRtoVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComFacA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodComFacB: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CantIngNSE: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantRtoTran: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantRtoVta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantFactA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantFactB: {
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
    tableName: 'vmHomLot',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xFecha_vHoLo",
        unique: true,
        fields: [
          { name: "FecHomolog" },
          { name: "IdLotHomolog" },
        ]
      },
      {
        name: "xIdLotHom_vHoLo",
        unique: true,
        fields: [
          { name: "IdLotHomolog" },
        ]
      },
    ]
  });
};
