const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('omIdUniv', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Tabla: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    Usuario: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'omIdUniv',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro2_oIdUn",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
