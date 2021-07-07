const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcHorarios', {
    CodHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Dia: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    HoraEntrada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HoraSalida: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tcHorarios',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_tcHora",
        unique: true,
        fields: [
          { name: "CodHorario" },
        ]
      },
      {
        name: "xDia_tcHora",
        unique: true,
        fields: [
          { name: "Dia" },
          { name: "CodHorario" },
        ]
      },
      {
        name: "xHoraEntrada_tcHora",
        fields: [
          { name: "HoraEntrada" },
        ]
      },
    ]
  });
};
