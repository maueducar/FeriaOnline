const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ugPerConsul', {
    IdConsulta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesdeNroLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaNroLiq: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescripcionLiqDesde: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescripcionLiqHasta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DesdeIdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaIdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ApellNombEmpleadoDesde: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    ApellNombEmpleadoHasta: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    DesdeConcepto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaConcepto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescripcionConceptoDesde: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescripcionConceptoHasta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DesdeFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HastaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesdeObSocial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaObSocial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescipcionObrSocialDesde: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescipcionObrSocialHasta: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ugPerConsul',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdConsulta_uPeCo",
        unique: true,
        fields: [
          { name: "IdConsulta" },
        ]
      },
    ]
  });
};
