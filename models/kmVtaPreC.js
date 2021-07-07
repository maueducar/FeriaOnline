const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kmVtaPreC', {
    IdPresupuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroPresupuesto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    FecRefProc: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecModificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecUltProceso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorUltProceso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Tipo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    Periodicidad: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    FecInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Activado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PeriCantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PeriCumplidos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PeriCumpliPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanUniProyec: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanUniRealizadas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanUniRealizPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanUniReaTeoPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanUniDesvioPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MontoProyec: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MontoRealizado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MontoRealizPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MontoReaTeoPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MontoDesvioPorc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdConsSQL: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanObjetivos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipPeriodo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'kmVtaPreC',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xEstActivado_kVtPC",
        unique: true,
        fields: [
          { name: "Activado" },
          { name: "FecInicio" },
          { name: "IdPresupuesto" },
        ]
      },
      {
        name: "xFechaDeInicio_kVtPC",
        unique: true,
        fields: [
          { name: "FecInicio" },
          { name: "IdPresupuesto" },
        ]
      },
      {
        name: "xFechaModif_kVtPC",
        unique: true,
        fields: [
          { name: "FecModificacion" },
          { name: "IdPresupuesto" },
        ]
      },
      {
        name: "xIdPresupuesto_kVtPC",
        unique: true,
        fields: [
          { name: "IdPresupuesto" },
        ]
      },
    ]
  });
};
