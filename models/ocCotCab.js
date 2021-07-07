const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocCotCab', {
    CodCotiza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    MonExtran: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SimboloMonet: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ocCotCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_oCoCa",
        unique: true,
        fields: [
          { name: "CodCotiza" },
        ]
      },
      {
        name: "xDescripcion_oCoCa",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
