const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtChoferes', {
    Codigo: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    TipDocume: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodART: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecVigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nacionalidad: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    FecVigenRegCond: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigenTraSusPel: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rtChoferes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_Chof",
        unique: true,
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "PorDescripcion_Chof",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
