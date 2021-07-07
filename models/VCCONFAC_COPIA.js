const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCCONFAC_COPIA', {
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Concepto: {
      type: DataTypes.STRING(41),
      allowNull: false
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    DesAbierta: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    CodImpues: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    DebHaber: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    CodTipConcepto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ImpuPropFija: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    PreUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PorcCalculo: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    GenCuotas: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    CanCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'VCCONFAC_COPIA',
    schema: 'dbo',
    timestamps: false
  });
};
