const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmGenLot', {
    IdLotGenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    FecGeneracion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdRegConfig: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ArchProcesar: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    ProcDesdeLinea: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLote: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CantComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmGenLot',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdConfiguracion_xGeLo",
        fields: [
          { name: "IdRegConfig" },
        ]
      },
      {
        name: "xIdLoteGeneracion_xGeLo",
        unique: true,
        fields: [
          { name: "IdLotGenCom" },
        ]
      },
    ]
  });
};
