const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcArmFor', {
    IdFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    DesArticulo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodRubro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroPrioridad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorAlta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecUltModi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorUltModi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecNoUso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnUso: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Audit_UsuarioAlta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NombreAlta: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_UsuarioModi: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NombreModi: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Procedim_DocName: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    Procedim_Password1: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Procedim_Password2: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Audit_NombreNoUso: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_UsuarioNoUso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MagnFormulacion: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    MagnFabricacion: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    PesoEspecifico: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotUniComFormul: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotUniComValoriz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotUniAdicionales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArticulos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArtiAdic: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValTareas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArticulosM: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArtiAdicM: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValTareasM: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArticulosF: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValArtiAdicF: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValTareasF: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CostoIndirecto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubCostoPPPC: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubCostoPPPM: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubCostoPPPF: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FinCostoPPPC: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FinCostoPPPM: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FinCostoPPPF: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CompromStock: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    MagnProdTerm: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    TotUniComPT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ProTerIdemForm: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CenStoOriCompo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CenStoOriAdicio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CenStoDesProdTer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pcArmFor',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xArtiPrioridad",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "NroPrioridad" },
        ]
      },
      {
        name: "xCodArticu_pArFo",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xCodRubro_pArFo",
        fields: [
          { name: "CodRubro" },
        ]
      },
      {
        name: "xDesArticulo",
        fields: [
          { name: "DesArticulo" },
          { name: "NroPrioridad" },
        ]
      },
      {
        name: "xDesArticulo_pArFo",
        fields: [
          { name: "DesArticulo" },
        ]
      },
      {
        name: "xIdFormula_pArFo",
        unique: true,
        fields: [
          { name: "IdFormula" },
        ]
      },
      {
        name: "xRubro",
        fields: [
          { name: "CodRubro" },
          { name: "CodArticu" },
          { name: "NroPrioridad" },
        ]
      },
      {
        name: "xUsoDescrip",
        fields: [
          { name: "EnUso" },
          { name: "DesArticulo" },
        ]
      },
    ]
  });
};
