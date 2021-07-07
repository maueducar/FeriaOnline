const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('umLegPer', {
    IdLegajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NomEmpleado: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ApellEmpleado: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Sexo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    DocTipo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    DocNumero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DocPolicia: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NroCUIL: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Nacionalidad: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    CodEstCivil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConyCargo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    FamiCargo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AdheCargo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Domicilio: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Email: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Provincia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    FecNacim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Edad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DiaPreReconAnt: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCatego: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCaliProf: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ActivoJubil: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    CodSeccion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MenJorneliz: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    BasicoJornal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SalBasUltMes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodLugPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodObrSocial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AfilSindicato: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSindicato: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ReginJubil: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    CodAFJP: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LiqSalFami: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodForPago: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CodMotEgre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecEgreso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRelLaboral1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VtoRelLaboral1: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodRelLaboral2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VtoRelLaboral2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodSitRevista1: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSitRevista2: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSitRevista3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DiaIniSitRevis1: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DiaIniSitRevis2: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DiaIniSitRevis3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Convencionado: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodSiniestrado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSituacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodCondicion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodActividad: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodZona: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CurricFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CurricEstudios: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    CurricTitulo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CurricDetalle: {
      type: DataTypes.STRING(5001),
      allowNull: false,
      defaultValue: ""
    },
    CurricIdiomas: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CurricNiveIdioma: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    AnteceAFJP: {
      type: DataTypes.STRING(5001),
      allowNull: false,
      defaultValue: ""
    },
    Foto: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    CodGrupo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroLegajoEmpresa: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'umLegPer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xApellEmpl_uLegP",
        unique: true,
        fields: [
          { name: "ApellEmpleado" },
          { name: "NomEmpleado" },
        ]
      },
      {
        name: "xCodAFJP_uLegP",
        fields: [
          { name: "CodAFJP" },
        ]
      },
      {
        name: "xCodCalifProf_uLegP",
        fields: [
          { name: "CodCaliProf" },
        ]
      },
      {
        name: "xCodCatego_uLegP",
        fields: [
          { name: "CodCatego" },
        ]
      },
      {
        name: "xCodCenCos_uLegP",
        fields: [
          { name: "CodCenCos" },
        ]
      },
      {
        name: "xCodCondic_uLegP",
        fields: [
          { name: "CodCondicion" },
        ]
      },
      {
        name: "xCodCtaCaja_uLegP",
        fields: [
          { name: "CodCtaCaja" },
        ]
      },
      {
        name: "xCodForPago_uLegP",
        fields: [
          { name: "CodForPago" },
        ]
      },
      {
        name: "xCodLoc_uLegP",
        fields: [
          { name: "Localidad" },
        ]
      },
      {
        name: "xCodLugPago_uLegP",
        fields: [
          { name: "CodLugPago" },
        ]
      },
      {
        name: "xCodMontEgre_uLegP",
        fields: [
          { name: "CodMotEgre" },
        ]
      },
      {
        name: "xCodObrSocial_uLegP",
        fields: [
          { name: "CodObrSocial" },
        ]
      },
      {
        name: "xCodPostal_uLegP",
        fields: [
          { name: "CodPostal" },
        ]
      },
      {
        name: "xCodProv_uLegP",
        fields: [
          { name: "Provincia" },
        ]
      },
      {
        name: "xCodRelLaboral1_uLegP",
        fields: [
          { name: "CodRelLaboral1" },
        ]
      },
      {
        name: "xCodSeccion_uLegP",
        fields: [
          { name: "CodSeccion" },
        ]
      },
      {
        name: "xCodSindicato_uLegP",
        fields: [
          { name: "CodSindicato" },
        ]
      },
      {
        name: "xCodSiniest_uLegP",
        fields: [
          { name: "CodSiniestrado" },
        ]
      },
      {
        name: "xCodSituacion_uLegP",
        fields: [
          { name: "CodSituacion" },
        ]
      },
      {
        name: "xCuil_uLegP",
        unique: true,
        fields: [
          { name: "NroCUIL" },
        ]
      },
      {
        name: "xEstCivil_uLegP",
        fields: [
          { name: "CodEstCivil" },
        ]
      },
      {
        name: "xIDLeg_uLegP",
        unique: true,
        fields: [
          { name: "IdLegajo" },
        ]
      },
      {
        name: "xNDocum_uLegP",
        unique: true,
        fields: [
          { name: "DocNumero" },
        ]
      },
      {
        name: "xNombEmpl_uLegP",
        unique: true,
        fields: [
          { name: "NomEmpleado" },
          { name: "ApellEmpleado" },
        ]
      },
    ]
  });
};
