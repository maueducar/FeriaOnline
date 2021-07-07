const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcAlumnos', {
    CodAlumno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Apellido: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Colegio: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    Ocupacion: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: ""
    },
    Nombres: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_CodCalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_CodCalleEsquina: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_CalleNro: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_CodBarrio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_Manzana: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_TorreCuerpo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Piso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_NroCasaDepa: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEstCivil: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TelePartFijo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    TelePartCel: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    TeleLaboral: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    FechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Nacionalidad: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodDocu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDocumento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    Sexo: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    CodEmpresaTrabajo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Categoria: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    },
    CodRefer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Observaciones: {
      type: DataTypes.STRING(5001),
      allowNull: false,
      defaultValue: ""
    },
    Foto: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    LugarNacimiento: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroSocio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    E_Mail: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CategoriaEdad: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    Padre_Apellido: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Padre_Nombres: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Padre_CodDocu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Padre_NroDocumento: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    Padre_FechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Dire_Padre_CodCalle: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_Padre_CodCalleEsquina: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Dire_Padre_CalleNro: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Padre_Manzana: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Padre_TorreCuerpo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Padre_NroCasaDepa: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Padre_CodBarrio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Padre_CodLocali: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Padre_CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Padre_CodPostal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Padre_TelePartFijo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Padre_TelePartCel: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Padre_TeleLaboral: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Padre_E_Mail: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Dire_Padre_Piso: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tcAlumnos',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xApeNom_tcAlum",
        unique: true,
        fields: [
          { name: "Apellido" },
          { name: "Nombres" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xBarrio_tcAlum",
        unique: true,
        fields: [
          { name: "Dire_CodBarrio" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCalle_tcAlum",
        unique: true,
        fields: [
          { name: "Dire_CodCalle" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCliente_tcAlum",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCodAlum_tcAlum",
        unique: true,
        fields: [
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCodDocu_tcAlum",
        unique: true,
        fields: [
          { name: "CodDocu" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCodRefer_tcAlum",
        unique: true,
        fields: [
          { name: "CodRefer" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xCodSocio_tcAlum",
        fields: [
          { name: "NroSocio" },
        ]
      },
      {
        name: "xEmpresa_tcAlum",
        unique: true,
        fields: [
          { name: "CodEmpresaTrabajo" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xLocalidad_tcAlum",
        unique: true,
        fields: [
          { name: "CodLocali" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xNacionalidad_tcAlum",
        fields: [
          { name: "Nacionalidad" },
          { name: "CodAlumno" },
        ]
      },
      {
        name: "xNroDocumento_tcAlum",
        unique: true,
        fields: [
          { name: "NroDocumento" },
        ]
      },
    ]
  });
};
