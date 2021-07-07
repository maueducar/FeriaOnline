const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pmOtCab', {
    NumOT: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdFormula: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodArticu: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEmision: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEstFinal: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecAnulacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecCancelacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SubValArticulos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubValTareas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    EstadoOT: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LitrosTeoricos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosTeoricos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosFinales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosFinales: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosEnvasados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosEnvasados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GenCompromStk: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    GenEmitirRutaFab: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodCenStoComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    },
    ComCompromet_ID: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComCompromet_Tipo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LaboOk: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    LaboUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    LaboFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LaboHora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComFinalFab_ID: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComFinalFab_Tipo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    EnvaOk: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    EnvaEstado: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    EnvaIdCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnvaTipCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TermFinal: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TermUsuario: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    TermFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TermHora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TermIdComStock: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TermTipoComStock: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AltaPTTipCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LitKilEnvasados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitKilEnProdTerm: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Observacion: {
      type: DataTypes.STRING(1000),
      allowNull: false,
      defaultValue: ""
    },
    Tab_Envasar: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Tab_Envasado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Tab_IngPT: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Tab_Terminado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Tab_Supervis: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    FecIniProceso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorIniProceso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecFinProceso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorFinProceso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIniMolienda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorIniMolienda: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecFinMolienda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HorFinMolienda: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OpeFabri: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OpeColora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pmOtCab',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodArticu_pOtCa",
        unique: true,
        fields: [
          { name: "CodArticu" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xCodArticu_potCa_2",
        fields: [
          { name: "CodArticu" },
        ]
      },
      {
        name: "xEstado",
        fields: [
          { name: "EstadoOT" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xFecAnulacion",
        fields: [
          { name: "FecAnulacion" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xFecEmision",
        unique: true,
        fields: [
          { name: "FecEmision" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xFecEstFinal",
        fields: [
          { name: "FecEstFinal" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xFecFinalizacion",
        fields: [
          { name: "FecCancelacion" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xIdFormula_pOtCa",
        fields: [
          { name: "IdFormula" },
        ]
      },
      {
        name: "xIdFormulaOT",
        fields: [
          { name: "IdFormula" },
          { name: "NumOT" },
        ]
      },
      {
        name: "xLoteStock",
        fields: [
          { name: "NumOT" },
        ]
      },
      {
        name: "xNumOT_pOtCa",
        unique: true,
        fields: [
          { name: "NumOT" },
        ]
      },
      {
        name: "xTabEnvasado_pOtCa",
        fields: [
          { name: "Tab_Envasado" },
        ]
      },
      {
        name: "xTabEnvasar_pOtCa",
        fields: [
          { name: "Tab_Envasar" },
        ]
      },
      {
        name: "xTabIngresadoPT_pOtCa",
        fields: [
          { name: "Tab_IngPT" },
        ]
      },
      {
        name: "xTabSupervisadas_pOtCa",
        fields: [
          { name: "Tab_Supervis" },
        ]
      },
      {
        name: "xTabTerminado_pOtCa",
        fields: [
          { name: "Tab_Terminado" },
        ]
      },
    ]
  });
};
