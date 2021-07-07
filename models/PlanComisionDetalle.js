const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlanComisionDetalle', {
    PlanComisionDetalleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    PlanComisionID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MontoDesde: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MontoHasta: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MontoPremio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PorcentajePremio: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DetalleBaja: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PlanComisionDetalle',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PlanComisionDetalle",
        unique: true,
        fields: [
          { name: "PlanComisionDetalleID" },
        ]
      },
    ]
  });
};
