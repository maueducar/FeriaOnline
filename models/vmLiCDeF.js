const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vmLiCDeF', {
    IdLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumLiquidacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroValor: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    NroInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IncidCheqEnRc: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Importe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_CodComVta: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Apli_LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Apli_PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_NumCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Apli_CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_FecComprob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Apli_TotalComprob: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_GravadoDelComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorDtoAlPie: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Apli_PorcDelNetoEnTotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpRecApliAFact: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorcRecApliAFact: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpPropCheApliAFact: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoImpPropCheApliAFact: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vmLiCDeF',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCliente_vLiDF",
        fields: [
          { name: "Apli_CodCliente" },
          { name: "Apli_FecComprob" },
          { name: "CodComVta" },
        ]
      },
      {
        name: "xClieVencimiento_vLiDF",
        fields: [
          { name: "Apli_CodCliente" },
        ]
      },
      {
        name: "xComprAplicadoFC",
        fields: [
          { name: "Apli_CodComVta" },
          { name: "Apli_LetCompro" },
          { name: "Apli_PunVenCom" },
          { name: "Apli_NumCompro" },
          { name: "Apli_IdCompro" },
        ]
      },
      {
        name: "xComprAplicadorRC",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFechaCompr_vLiDF",
        fields: [
          { name: "Apli_FecComprob" },
        ]
      },
      {
        name: "xIdCompro_vLiDF",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdComprob_vLiDF",
        fields: [
          { name: "IdCompro" },
        ]
      },
      {
        name: "xIdLiquidacion_vLiDF",
        unique: true,
        fields: [
          { name: "IdLiquidacion" },
          { name: "CodComVta" },
          { name: "VisCompro" },
          { name: "CodCtaCaja" },
          { name: "IdCompro" },
          { name: "IdRegistro" },
        ]
      },
      {
        name: "xIdLiquidacion_vLiDF_2",
        fields: [
          { name: "IdLiquidacion" },
        ]
      },
      {
        name: "xNroLiquidacion_vLiDF",
        fields: [
          { name: "CodSucurs" },
          { name: "NumLiquidacion" },
          { name: "IdCompro" },
        ]
      },
    ]
  });
};
