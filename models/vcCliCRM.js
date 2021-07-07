const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliCRM', {
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVendedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Operador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaSus: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraSuceso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comentario: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Recordar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FechaRec: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraRec: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ParaOper: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Categoria: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'vcCliCRM',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xClieEstado",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "Estado" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xClienteFecha",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "FechaSus" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xClienteVto",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "FechaRec" },
          { name: "HoraRec" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodCliente_vCliS",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xFecRecord",
        unique: true,
        fields: [
          { name: "Recordar" },
          { name: "FechaRec" },
          { name: "Estado" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdReg_vCilS",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
