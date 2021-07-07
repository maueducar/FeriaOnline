const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcCliBen', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ApellidoBenef: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NombreBenef: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipoDocumento: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    NroDocumento: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    FechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FechaIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Parentezco: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    Cobertura_Sepelio: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Cobertura_Nicho: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Cobertura_SevMedico: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Ambulancia: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Cobertura_NivelParcela: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoNivelParcela: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    PrimaMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Edad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImprimeCarnet: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodMotBaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Inhumacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Cremacion: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones: {
      type: DataTypes.STRING(1001),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcCliBen',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xApellNombre_vBene",
        unique: true,
        fields: [
          { name: "ApellidoBenef" },
          { name: "NombreBenef" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodClie_IdReg_vBene",
        unique: true,
        fields: [
          { name: "CodCliente" },
          { name: "NroDocumento" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodClieIdReg_vBene",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xCodCliente_vBene",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xFechaIngreso_vBene",
        fields: [
          { name: "FechaIngreso", order: "DESC" },
        ]
      },
      {
        name: "xFechNacim_vBene",
        fields: [
          { name: "FechaNacimiento" },
        ]
      },
      {
        name: "xNroDocumento_vBene",
        fields: [
          { name: "NroDocumento" },
        ]
      },
    ]
  });
};
