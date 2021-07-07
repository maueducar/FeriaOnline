const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mcAdmin', {
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NomVended: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Telefono: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    ComVentas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ComCobran: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Flag: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroDoc: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    Provincia: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    CodPostal: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Habilitado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    TipoVendedor: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Sucursal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LimUniStock: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecIngreso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FecBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aMail: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    BaseDato: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mcAdmin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_mAdm",
        unique: true,
        fields: [
          { name: "CodVended" },
        ]
      },
      {
        name: "xNombre_mAdm",
        unique: true,
        fields: [
          { name: "NomVended" },
        ]
      },
    ]
  });
};
