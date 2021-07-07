const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcMutual', {
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RazSocial: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NumCUIT: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    Contacto: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    DiaCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorDesPer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Calle: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EMail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ModImpresion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodEmpFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Piso: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    NroDepto: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mcMutual',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_mMutu",
        unique: true,
        fields: [
          { name: "CodMutual" },
        ]
      },
      {
        name: "xRazSocial_mMutu",
        unique: true,
        fields: [
          { name: "RazSocial" },
          { name: "CodMutual" },
        ]
      },
    ]
  });
};
