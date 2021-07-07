const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmLibMatCab', {
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
    CodAlumno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCarrera: {
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
    tableName: 'tmLibMatCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodAlumno_tmLmCa",
        fields: [
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCodCarrera_tmLmCa",
        fields: [
          { name: "CodCarrera" },
        ]
      },
      {
        name: "xCodLibro_tmLmCa",
        fields: [
          { name: "CodLibro" },
        ]
      },
      {
        name: "xCodYearCurs_tmLmCa",
        fields: [
          { name: "CodYear" },
        ]
      },
      {
        name: "xFolioYLibro_tmLmCa",
        unique: true,
        fields: [
          { name: "Folio" },
          { name: "CodLibro" },
        ]
      },
    ]
  });
};
