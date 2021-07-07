const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcSucurs', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Direccion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Localidad: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodProvin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPostal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FecBaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Rang1Clie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Rang2Clie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Rang1CliCreMut: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Rang2CliCreMut: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Rang1Prove: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Rang2Prove: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SucRemota: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcSucurs',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vSucu",
        unique: true,
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xDescripcion_vSucu",
        fields: [
          { name: "Descripcion" },
        ]
      },
    ]
  });
};
