const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtCurC', {
    CodCurva: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    UniMedida: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CanUnidades: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MedidaDesde: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    EquivDesde: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtCurC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sCuC",
        unique: true,
        fields: [
          { name: "CodCurva" },
        ]
      },
      {
        name: "xDescripcion_sCuC",
        unique: true,
        fields: [
          { name: "Descripcion" },
          { name: "CodCurva" },
        ]
      },
    ]
  });
};
