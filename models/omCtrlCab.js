const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omCtrlCab', {
    IdControl: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesControl: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Activado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ExpExcel: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NomLibroXLS: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    XLS_Hoja: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    XLS_Columna: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    XLS_Fila: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Calcular: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Calculado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecCalculo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorCalculo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omCtrlCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xDescripcion_oCtCa",
        fields: [
          { name: "DesControl" },
        ]
      },
      {
        name: "xIdControl",
        unique: true,
        fields: [
          { name: "IdControl" },
        ]
      },
      {
        name: "xNroOrden",
        unique: true,
        fields: [
          { name: "Orden" },
          { name: "IdControl" },
        ]
      },
    ]
  });
};
