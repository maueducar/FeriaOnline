const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ugEmpresa', {
    Nombre: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    CUIT: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    ActividadGeneral: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ActividadANSSES: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    EmpresaBeneficiada: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoEmpresa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Provincia: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodigoPostal: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Email: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'ugEmpresa',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xLocalidad_uEmpre",
        fields: [
          { name: "Localidad" },
        ]
      },
      {
        name: "xNroCUIT_uEmpre",
        unique: true,
        fields: [
          { name: "CUIT" },
        ]
      },
      {
        name: "xProvinica_uEmpre",
        fields: [
          { name: "Provincia" },
        ]
      },
    ]
  });
};
