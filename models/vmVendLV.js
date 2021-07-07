const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmVendLV', {
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Anio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Mes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Periodo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sueldo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Viaticos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcComision: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescZona: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    Observacion: {
      type: DataTypes.STRING(201),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vmVendLV',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xVendPeriodo_vVeLV",
        unique: true,
        fields: [
          { name: "CodVended" },
          { name: "Anio" },
          { name: "Mes" },
        ]
      },
    ]
  });
};
