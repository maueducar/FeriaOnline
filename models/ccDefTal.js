const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccDefTal', {
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
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
      type: DataTypes.STRING(4),
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
    ModImpre: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    ImpDestino: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    PueImpres: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    NroRegPos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    }
  }, {
    sequelize,
    tableName: 'ccDefTal',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_cDeTa",
        unique: true,
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xCodSucurs_cDeTa",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xDescripcion_cDeTa",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xSucursal",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodTalona" },
        ]
      },
      {
        name: "xTipoCompCorr",
        unique: true,
        fields: [
          { name: "TipComCorresp" },
          { name: "CodTalona" },
        ]
      },
    ]
  });
};
