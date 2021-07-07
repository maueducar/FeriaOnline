const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rgEmpresa', {
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    RazonSocial: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Actividad: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Provincia: {
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
    NroFax: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    E_Mail: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    CUIT: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    NroIngrBrutos: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    SedeTimbrado: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    NroEstablecimiento: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    SitIngBrutos: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    SitIVA: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    NroCaja: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    AgeRetGanancias: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    AgeRetIngBrutos: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rgEmpresa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdRegistro_Empr",
        unique: true,
        fields: [
          { name: "IdRegistro" },
        ]
      },
    ]
  });
};
