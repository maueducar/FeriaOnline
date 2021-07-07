const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmTurLegDia', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTurno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaMes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hmTurLegDia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegajo_hLeTuD",
        unique: true,
        fields: [
          { name: "CodTurno" },
          { name: "IdLegajo" },
          { name: "NroHorario" },
          { name: "DiaMes" },
        ]
      },
      {
        name: "xIdRegistro_hLeTuD",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
