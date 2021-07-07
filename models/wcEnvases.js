const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wcEnvases', {
    CodEnvase: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodTipEnva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Peso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoMaximo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoMinimo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wcEnvases',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cEnv",
        unique: true,
        fields: [
          { name: "CodEnvase" },
        ]
      },
      {
        name: "xCodTipo_cEnv",
        fields: [
          { name: "CodEnvase" },
          { name: "CodTipEnva" },
        ]
      },
      {
        name: "xDescripcion_cEnv",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xTipo_cEnv",
        fields: [
          { name: "CodTipEnva" },
          { name: "CodEnvase" },
        ]
      },
    ]
  });
};
