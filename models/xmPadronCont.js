const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xmPadronCont', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecPubli: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigeD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecVigeH: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUIT: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    TipoContrib: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    MarcaAltBajSuj: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    MarcaCamAlicuota: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    AlicPercepcion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AlicRetencion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroGrupoPercep: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroGrupoReten: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'xmPadronCont',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCuit_xPaCo",
        unique: true,
        fields: [
          { name: "CUIT" },
          { name: "CodProvin" },
          { name: "FecPubli" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xFechaPub_xPaco",
        fields: [
          { name: "FecPubli" },
          { name: "CodProvin" },
        ]
      },
      {
        name: "xIdRegistro_xPaCo",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
