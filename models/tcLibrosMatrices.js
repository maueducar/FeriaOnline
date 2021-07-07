const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcLibrosMatrices', {
    CodLibro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodSede: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'tcLibrosMatrices',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodLibro_tcLiMa",
        unique: true,
        fields: [
          { name: "CodLibro" },
        ]
      },
      {
        name: "xCodSede_tcLiMa",
        fields: [
          { name: "CodSede" },
        ]
      },
      {
        name: "xDescrip_tcLiMa",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
