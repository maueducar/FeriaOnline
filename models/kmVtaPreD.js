const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kmVtaPreD', {
    IdPresupuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroPeriodo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ObjControl: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Codigo: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DesCodigo: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    ObjControl2: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Codigo2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DesCodigo2: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    TipUniPresup: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CanPresup: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanRealizada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DifRealizPresup: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcRealizado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcDiferencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcZonaDeRiesgo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcZonaAceptable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup5: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup6: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup7: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup8: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup9: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup10: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup11: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanPresup12: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'kmVtaPreD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdPresCodigo_kVtPD",
        unique: true,
        fields: [
          { name: "IdPresupuesto" },
          { name: "Codigo" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdPresupuesto_kVtPD",
        unique: true,
        fields: [
          { name: "IdPresupuesto" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
