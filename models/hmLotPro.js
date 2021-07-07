const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hmLotPro', {
    IdLotProcesam: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    IdReloj: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecFichadaIni: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraIni: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    FecFichadaFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraFin: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    CantReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RegProces: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hmLotPro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdLoteProcesam_hLoPr",
        unique: true,
        fields: [
          { name: "IdLotProcesam" },
        ]
      },
    ]
  });
};
