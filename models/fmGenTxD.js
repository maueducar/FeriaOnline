const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmGenTxD', {
    NroImportacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    ImpAcraACuo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDeCuoAcre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpDelDebito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MotRechazo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Clave: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    TextoRegistro: {
      type: DataTypes.STRING(601),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fmGenTxD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNroDeImportacion_fGeTxD",
        fields: [
          { name: "NroImportacion" },
          { name: "Clave" },
        ]
      },
      {
        name: "xNroImpIdReg_fGeTxD",
        unique: true,
        fields: [
          { name: "NroImportacion" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xNroImpoCanCuo_fGeTxD",
        fields: [
          { name: "NroImportacion" },
          { name: "NroDeCuoAcre" },
        ]
      },
      {
        name: "xNroImportaSolo_fGeTxD",
        fields: [
          { name: "NroImportacion" },
        ]
      },
      {
        name: "xNroImpoYDebito_fGeTxD",
        fields: [
          { name: "NroImportacion" },
          { name: "ImpDelDebito" },
        ]
      },
    ]
  });
};
