const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DataLog', {
    Id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumeroMaquina: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ModoVerificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Anio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Minuto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EsEntrada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(256),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'DataLog',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__DataLog__45DE573A",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
};
