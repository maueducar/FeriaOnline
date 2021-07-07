const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuxVaPlanComision', {
    IdPlanComision: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PlanComisionDesctipcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ImporteDesde: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ImporteHasta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ImportePremio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PorcentajePremio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ImportePremioJefeVenta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PorcentajeJefeVenta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Baja: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    FechaAlta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UsuarioAlta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FechaModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuarioModiFicacion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FechaBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UsuarioBaja: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Comentario: {
      type: DataTypes.STRING(800),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AuxVaPlanComision',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__AuxVaPla__FF8A5EC61D5C7DD5",
        unique: true,
        fields: [
          { name: "IdPlanComision" },
        ]
      },
    ]
  });
};
