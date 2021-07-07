const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DetPrestacion', {
    PrestacionID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CodConFac: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Importe: {
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
    tableName: 'DetPrestacion',
    schema: 'dbo',
    timestamps: false
  });
};
