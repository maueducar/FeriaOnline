const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Prestacion', {
    PrestacionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CodTipConcepto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    ImporteTotal: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    CostoPlan: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    FechaAlta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UsuarioAlta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FechaBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioBaja: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioModificacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Prestacion',
    schema: 'dbo',
    timestamps: false
  });
};
