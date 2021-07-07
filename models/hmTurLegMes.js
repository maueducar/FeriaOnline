const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmTurLegMes', {
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
    NroHorario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dia01: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia02: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia03: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia04: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia05: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia06: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia07: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia08: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia09: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia10: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia11: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia12: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia13: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia14: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia15: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia16: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia17: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia18: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia19: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia20: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia21: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia22: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia23: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia24: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia25: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia26: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia27: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia28: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia29: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia30: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Dia31: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'hmTurLegMes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLegajo_hLeTuM",
        unique: true,
        fields: [
          { name: "CodTurno" },
          { name: "IdLegajo" },
          { name: "NroHorario" },
        ]
      },
      {
        name: "xIdRegistro_hLeTuM",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
