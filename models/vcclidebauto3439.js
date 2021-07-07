const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcclidebauto3439', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false
    },
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ValorUni: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AcreditaCuenta: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    CodClienteCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    PeriodoInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaFinCarencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Amparado: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    DocNumero: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    NroCtaBancaria: {
      type: DataTypes.STRING(41),
      allowNull: false
    },
    NroPoliza: {
      type: DataTypes.STRING(41),
      allowNull: false
    },
    ImporteInformar: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodEmpFin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'vcclidebauto3439',
    schema: 'dbo',
    timestamps: false
  });
};
