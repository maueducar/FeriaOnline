const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CostoTipCon', {
    CostoTipConID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CodTipConcepto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false
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
    tableName: 'CostoTipCon',
    schema: 'dbo',
    timestamps: false
  });
};
