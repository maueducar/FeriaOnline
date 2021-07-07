const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('icCaHmKm', {
    CodUni: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Observaciones: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    HskmFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaCambio: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'icCaHmKm',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_iCaHK",
        unique: true,
        fields: [
          { name: "CodUni" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodigoFecha_iCaHK",
        unique: true,
        fields: [
          { name: "CodUni" },
          { name: "FechaCambio" },
        ]
      },
    ]
  });
};
