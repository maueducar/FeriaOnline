const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliSep', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroAutMuni: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecNacim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecFall: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecInhumacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraInhumacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoInhumacion: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      defaultValue: ""
    },
    TipoDoc: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Juridiccion: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    NroLibRegistro: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    NroActa: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    Cocheria: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliSep',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodCliente_vClSe",
        unique: true,
        fields: [
          { name: "CodCliente" },
        ]
      },
    ]
  });
};
