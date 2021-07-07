const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcProfesores', {
    CodProfesor: {
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
      type: DataTypes.STRING(51),
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
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    TituloAcademico: {
      type: DataTypes.CHAR(35),
      allowNull: false,
      defaultValue: ""
    },
    FechaTitulo: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      defaultValue: ""
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tcProfesores',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xApeNom_tcProf",
        unique: true,
        fields: [
          { name: "Apellido" },
          { name: "Nombres" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xBarrio_tcProf",
        unique: true,
        fields: [
          { name: "Dire_CodBarrio" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCalle_tcProf",
        unique: true,
        fields: [
          { name: "Dire_CodCalle" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCliente_tcProf",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCodDocu_tcProf",
        unique: true,
        fields: [
          { name: "CodDocu" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCodProf_tcProf",
        unique: true,
        fields: [
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCodRefer_tcProf",
        unique: true,
        fields: [
          { name: "CodRefer" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xCodSocio_tcProf",
        fields: [
          { name: "NroSocio" },
        ]
      },
      {
        name: "xEmpresa_tcProf",
        unique: true,
        fields: [
          { name: "CodEmpresaTrabajo" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xLocalidad_tcProf",
        unique: true,
        fields: [
          { name: "CodLocali" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xNacionalidad_tcProf",
        fields: [
          { name: "Nacionalidad" },
          { name: "CodProfesor" },
        ]
      },
      {
        name: "xNroDocumento_tcProf",
        unique: true,
        fields: [
          { name: "NroDocumento" },
        ]
      },
    ]
  });
};
