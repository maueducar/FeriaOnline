const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CalculoPorTipo_SubRubro', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CodTipConcepto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CodSubRub: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CodConFac: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Carencia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    Formula: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    Alias: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FechaAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioAlta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioBaja: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CalculoPorTipo_SubRubro',
    schema: 'dbo',
    timestamps: false
  });
};
