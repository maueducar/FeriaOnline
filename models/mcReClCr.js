const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcReClCr', {
    CodCliCredito: {
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
    Nombre: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    TipDocume: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NumDocume: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodSitIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPais: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
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
    Calle: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    EMail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Ocupac: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Profes: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    LugTrabajo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroLegajo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    Haberes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DomTrabajo: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    LocTrabajo: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Departamento: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodPosTrabajo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    TelTrabajo: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    TelMensajes: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    AfiMutual: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroAfiliado: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    FecNacim: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EstCivil: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    CtaConDebAut: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Banco: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    NroSucursal: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    TipoCuenta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroCuenta: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    LimImpCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimTotCredito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apellido: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Nombres: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    HaberesInicial: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Observac: {
      type: DataTypes.STRING(1001),
      allowNull: false,
      defaultValue: ""
    },
    CUIL: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mcReClCr',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodClieMaestro_mReCl",
        unique: true,
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodigo_mReCl",
        unique: true,
        fields: [
          { name: "CodCliCredito" },
        ]
      },
      {
        name: "xNombre_mReCl",
        unique: true,
        fields: [
          { name: "Nombre" },
          { name: "CodCliCredito" },
        ]
      },
      {
        name: "xNroDocumento_mReCl",
        unique: true,
        fields: [
          { name: "NumDocume" },
          { name: "CodCliCredito" },
        ]
      },
    ]
  });
};
