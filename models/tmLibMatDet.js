const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmLibMatDet', {
    Folio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodLibro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodMate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCondCursado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LibActa_Folio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LibActa_CodLibro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechExamen: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodYear: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tmLibMatDet',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodLibro_tmLmDe",
        fields: [
          { name: "CodLibro" },
        ]
      },
      {
        name: "xCodLibroActas",
        fields: [
          { name: "LibActa_CodLibro" },
        ]
      },
      {
        name: "xCondCursado_tmLmDe",
        fields: [
          { name: "CodCondCursado" },
        ]
      },
      {
        name: "xFoLib_tmLmDe",
        fields: [
          { name: "Folio" },
          { name: "CodLibro" },
        ]
      },
      {
        name: "xFoLibMat_tmLmDe",
        unique: true,
        fields: [
          { name: "Folio" },
          { name: "CodLibro" },
          { name: "CodMate" },
        ]
      },
      {
        name: "xMateria_tmLmDe",
        fields: [
          { name: "CodMate" },
        ]
      },
      {
        name: "xYearCursado_tmLmDe",
        fields: [
          { name: "CodYear" },
        ]
      },
    ]
  });
};
