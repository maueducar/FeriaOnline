const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmComRGa', {
    RrIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RrCodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    RrLetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    RrPunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RrNumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RrVisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    RoIdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RoCodComComp: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    RoLetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    RoPunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoNumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoVisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    RoFecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RoTotOriComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoTotOriGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AntRoTotComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AntRoTotGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoTotComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoTotGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PagTotAplicado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PagTotGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonNoSujeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComComp_OtrRet: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro_OtrRet: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisCompro_OtrRet: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FecComprob_OtrRet: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Aplicado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RoBasImponible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRetencion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TotApliRetenible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotRetencion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpYaRetenido: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagYaRetenido: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ImpRetencion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcReten: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Escala: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtBasImponible: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtImporte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoRetencion: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdeRegAsi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'cmComRGa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xIdRdorFecOP_cCoRG",
        fields: [
          { name: "RrIdCompro" },
          { name: "FecComprob_OtrRet" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xIdRetenedor",
        fields: [
          { name: "RrIdCompro" },
          { name: "RoFecComprob" },
        ]
      },
      {
        name: "xIdRetenido",
        fields: [
          { name: "RoIdCompro" },
        ]
      },
      {
        name: "xIdRidoRdor",
        unique: true,
        fields: [
          { name: "RrIdCompro" },
          { name: "RoIdCompro" },
          { name: "CodRetencion" },
          { name: "IdeRegAsi" },
        ]
      },
      {
        name: "xImpuesto_cCoRG",
        fields: [
          { name: "CodRetencion" },
          { name: "RoFecComprob" },
        ]
      },
    ]
  });
};
