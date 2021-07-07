const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcTurHor', {
    CodTurno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumPeriodo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumDia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'hcTurHor',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodHorario_hTuHo",
        fields: [
          { name: "CodHorario" },
        ]
      },
      {
        name: "xTurnoHorario_hTuHo",
        unique: true,
        fields: [
          { name: "CodTurno" },
          { name: "NumPeriodo" },
          { name: "NumDia" },
          { name: "Orden" },
          { name: "CodHorario" },
        ]
      },
    ]
  });
};
