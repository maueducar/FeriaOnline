const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scArtCurD', {
    CodCurva: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Orden: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Medida: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    Equivalencia: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    Medida2: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'scArtCurD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_sCuD",
        fields: [
          { name: "CodCurva" },
        ]
      },
      {
        name: "xCodigoOrden_sCuD",
        unique: true,
        fields: [
          { name: "CodCurva" },
          { name: "Orden" },
        ]
      },
    ]
  });
};
