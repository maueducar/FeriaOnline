const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omRegTra', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumEjerci: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PerTransa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumTransa: {
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
    Usuario: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OriModulo: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
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
    }
  }, {
    sequelize,
    tableName: 'omRegTra',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xTransaccion_oReTr",
        unique: true,
        fields: [
          { name: "VisTransa" },
        ]
      },
    ]
  });
};
