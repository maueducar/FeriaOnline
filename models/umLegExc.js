const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegExc', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodExcepcion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesdeHora: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    HastaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HastaHora: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    CodConLiquid: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    QueReconocer: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    TipoUnidades: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    UnidDiarias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'umLegExc',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodConLiq_uLeEx",
        fields: [
          { name: "CodConLiquid" },
        ]
      },
      {
        name: "xCodExcepcion",
        fields: [
          { name: "CodExcepcion" },
        ]
      },
      {
        name: "xIdRegistro_uLeEx",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xLegajo_uLeEx",
        unique: true,
        fields: [
          { name: "IdLegajo" },
          { name: "DesdeFecha" },
          { name: "DesdeHora" },
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
