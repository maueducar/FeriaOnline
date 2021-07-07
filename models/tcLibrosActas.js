const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcLibrosActas', {
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
    tableName: 'tcLibrosActas',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodLibro_tcLiAc",
        unique: true,
        fields: [
          { name: "CodLibro" },
        ]
      },
      {
        name: "xCodSede_tcLiAc",
        fields: [
          { name: "CodSede" },
        ]
      },
      {
        name: "xDescrip_tcLiAc",
        unique: true,
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
