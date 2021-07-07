const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rmCabeStock', {
    Comprobante: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Chofer: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Transportista: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Camara: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    OrdenAsociada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Estado: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    CodLugCar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodLugDes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDesComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PatenteChasis: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PatenteAcoplado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones1: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones2: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones3: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones4: {
      type: DataTypes.STRING(81),
      allowNull: false,
      defaultValue: ""
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaContable: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoLiquidacion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    EstadoDesglose: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    EstadoImpresion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Refer_Comprob: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Refer_Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_CodUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Audit_NomUsuario: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    Audit_Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Audit_Hora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstadoInfTelFax: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    CodCamion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantMail: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZona: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rmCabeStock',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorCamara_Cstk",
        fields: [
          { name: "Camara" },
          { name: "Comprobante" },
          { name: "Numero", order: "DESC" },
        ]
      },
      {
        name: "PorChofer_Cstk",
        fields: [
          { name: "Chofer" },
          { name: "Comprobante" },
          { name: "Numero", order: "DESC" },
        ]
      },
      {
        name: "PorCliente_Cstk",
        fields: [
          { name: "Cliente" },
          { name: "Comprobante" },
          { name: "Numero", order: "DESC" },
        ]
      },
      {
        name: "PorComprobante_Cstk",
        unique: true,
        fields: [
          { name: "Comprobante" },
          { name: "Numero", order: "DESC" },
          { name: "EstadoDesglose", order: "DESC" },
        ]
      },
      {
        name: "PorTransportista_Cstk",
        fields: [
          { name: "Transportista", order: "DESC" },
          { name: "Comprobante" },
          { name: "Numero", order: "DESC" },
        ]
      },
      {
        name: "xCamara_Cstk",
        fields: [
          { name: "Camara" },
        ]
      },
      {
        name: "xCamion_Cstk",
        fields: [
          { name: "CodCamion" },
        ]
      },
      {
        name: "xCanalComer_Cstk",
        fields: [
          { name: "CodCanComer" },
        ]
      },
      {
        name: "xChofer_Cstk",
        fields: [
          { name: "Chofer" },
        ]
      },
      {
        name: "xCliente_Cstk",
        fields: [
          { name: "Cliente" },
        ]
      },
      {
        name: "xCodZona",
        fields: [
          { name: "CodZona" },
        ]
      },
      {
        name: "xCompNumero_Cstk",
        fields: [
          { name: "Comprobante" },
          { name: "Numero" },
        ]
      },
      {
        name: "xComprobante_Cstk",
        fields: [
          { name: "Comprobante" },
        ]
      },
      {
        name: "xDesComer_Cstk",
        fields: [
          { name: "CodDesComer" },
        ]
      },
      {
        name: "xEstadoLiquid_Cstk",
        fields: [
          { name: "EstadoLiquidacion" },
          { name: "Cliente" },
          { name: "Comprobante" },
        ]
      },
      {
        name: "xFechaComp_Cstk",
        fields: [
          { name: "Fecha" },
        ]
      },
      {
        name: "xLugCarga_Cstk",
        fields: [
          { name: "CodLugCar" },
        ]
      },
      {
        name: "xLugDesc_Cstk",
        fields: [
          { name: "CodLugDes" },
        ]
      },
      {
        name: "xReferComprob_Cstk",
        fields: [
          { name: "Refer_Comprob" },
          { name: "Refer_Numero" },
        ]
      },
      {
        name: "xTransportista_Cstk",
        fields: [
          { name: "Transportista" },
        ]
      },
      {
        name: "xUsuario_Cstk",
        fields: [
          { name: "Audit_CodUsuario" },
          { name: "Audit_Fecha" },
          { name: "Audit_Hora" },
        ]
      },
    ]
  });
};
