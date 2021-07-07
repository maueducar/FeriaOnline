const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcDefTal', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Letra: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    TipComCorresp: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ModNumProp: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IntLibroIva: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    IvaDiscrim: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ImpComprob: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CanCopias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConfCopias: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ModImpre: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ModImpre2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ModImpre3: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ModImpre4: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestino: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestino2: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestino3: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestino4: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    PueImpres: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    NumIniHabil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumFinHabil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ProNumEmit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipExisten: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    TalHabilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NroRegPos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HardNroRegPos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    LimRegOArticulos: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CodPueTrab: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NoCtrlPunVenLote: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcDefTal',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vDeTa",
        unique: true,
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xCodSucurs_vDeTa",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xDescripcion_vDeTa",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xSucursal_vDeTa",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xTipoCompCorr_vDeTa",
        unique: true,
        fields: [
          { name: "TipComCorresp" },
          { name: "CodTalona" },
        ]
      },
    ]
  });
};
