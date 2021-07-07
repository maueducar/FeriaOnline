const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtCompDeStock', {
    Codigo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Descripcion: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    EntradaSalida: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SolicitaCliente: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaChofer: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaLugCarga: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaDestComer: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaCanalComer: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaDatosVehicu: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaLugDescarga: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SolicitaTransportista: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Imprimible: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Valorizado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CantCopias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaContable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NomReporte: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'rtCompDeStock',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PorCodigo_Comp",
        unique: true,
        fields: [
          { name: "Codigo" },
        ]
      },
      {
        name: "PorDescripcion_Comp",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xCtaCble_Comp",
        fields: [
          { name: "CodCtaContable" },
        ]
      },
    ]
  });
};
