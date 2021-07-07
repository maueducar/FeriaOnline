const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fmMovCaC', {
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NoUser: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaCaja: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodComCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TipoMovim: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    LetraComprob: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    PtoVtaComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumeroComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NroPesent: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    FechaCompr: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraCompr: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Concepto: {
      type: DataTypes.STRING(121),
      allowNull: false,
      defaultValue: ""
    },
    Cliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Proveedor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVended: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroMinuta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisTransa: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    Confirmado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Subt_Debitos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Subt_Creditos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Subt_Diferencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroIDeMovim: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpTarjeta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMutual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodEmpFin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipDocSoli: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NumDocSoli: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodSolicit: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipDocGara: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    NumDocGara: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    CodGarante: {
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
      type: DataTypes.STRING(21),
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
    MonExt_Subt_Debitos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_Subt_Creditos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_Subt_Diferencia: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_Cotizacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExt_ConfCoti: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'fmMovCaC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PorCliente_fMoCC",
        fields: [
          { name: "Cliente" },
          { name: "FechaCompr" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "PorComprobante_fMoCC",
        unique: true,
        fields: [
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "PorNroCaja",
        fields: [
          { name: "CodSucurs", order: "DESC" },
          { name: "CodPunVen", order: "DESC" },
          { name: "NroCaja", order: "DESC" },
          { name: "TipoMovim" },
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "PorNroCaja_fMoCC",
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
          { name: "NroCaja" },
        ]
      },
      {
        name: "PorProveedor",
        fields: [
          { name: "Proveedor" },
          { name: "FechaCompr" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "PorRepresentante",
        fields: [
          { name: "CodVended" },
          { name: "FechaCompr" },
          { name: "CodComCaja" },
        ]
      },
      {
        name: "PorTalonario",
        fields: [
          { name: "CodTalona" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
        ]
      },
      {
        name: "xCodComCaja_fMoCC",
        fields: [
          { name: "CodComCaja" },
        ]
      },
      {
        name: "xCodTalona_fMoCC",
        fields: [
          { name: "CodTalona" },
        ]
      },
      {
        name: "xGarante",
        fields: [
          { name: "CodGarante" },
          { name: "FechaCompr" },
        ]
      },
      {
        name: "xIdComprob_fMoCC",
        unique: true,
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xNroTransaccion_fMoCC",
        fields: [
          { name: "VisTransa" },
          { name: "CodComCaja" },
          { name: "LetraComprob" },
          { name: "PtoVtaComprob" },
          { name: "NumeroComprob" },
        ]
      },
      {
        name: "xProveedor_fMoCC",
        fields: [
          { name: "Proveedor" },
        ]
      },
      {
        name: "xSolicitante",
        fields: [
          { name: "CodSolicit" },
          { name: "FechaCompr" },
        ]
      },
      {
        name: "xUsuario_fMoCC",
        fields: [
          { name: "Audit_CodUsuario" },
          { name: "Audit_Fecha" },
          { name: "Audit_Hora" },
        ]
      },
    ]
  });
};
