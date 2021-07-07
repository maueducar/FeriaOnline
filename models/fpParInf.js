const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fpParInf', {
    NomProc: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCenCosD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCosH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentaD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuentaH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumAsientD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumAsientH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecContabD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecContabH: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVtoD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVtoH: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodMutualD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMutualH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescMutualD: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescMutualH: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodTarjetaD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTarjetaH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFinD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFinH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescEmpFinD: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescEmpFinH: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TasInteres: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursD: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursH: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescSucD: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescSucH: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCajaD: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCajaH: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    DescCtaCajD: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescCtaCajH: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroValorD: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    NroValorH: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'fpParInf',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNomProcUser_fcPaIn",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdUsuario" },
        ]
      },
    ]
  });
};
