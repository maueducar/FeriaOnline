const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DetCostoTipCon', {
    DetCostoTipConcID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CostoTipConID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CodConFac: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.DATE,
      allowNull: true
    },
    CabCostoTipConID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DetCostoTipCon',
    schema: 'dbo',
    timestamps: false
  });
};
