const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wmMovVinD', {
    NroRecono: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliPro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCuit: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    TenAzucarino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotKilos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Comentario1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Comentario2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    IngreEgre: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    IngEgrFactor: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodComMovVin: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    NroComMovVin: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosElabora: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosDedu: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLitros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDeposito: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Cosecha: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PrecioUniVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpGravado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpVarios: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpRetenciones: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotalFinal: {
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
    Id_Registro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    INV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CantCIUs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wmMovVinD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xCliDepVinoFecha_wMoVD",
        fields: [
          { name: "CodCliPro" },
          { name: "CodDeposito" },
          { name: "CodTipVino" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xClieDepVinoCose_wMoVD",
        fields: [
          { name: "CodCliPro" },
          { name: "CodDeposito" },
          { name: "CodTipVino" },
          { name: "Cosecha" },
        ]
      },
      {
        name: "xCliFechaVino_wMoVD",
        fields: [
          { name: "CodCliPro" },
          { name: "Fecha" },
          { name: "CodTipVino" },
          { name: "NroRecono" },
        ]
      },
      {
        name: "xCliVinoFecha_wMoVD",
        fields: [
          { name: "CodCliPro" },
          { name: "CodTipVino" },
          { name: "Fecha" },
          { name: "NroRecono" },
        ]
      },
      {
        name: "xCodComMovVino_wMoVD",
        fields: [
          { name: "CodComMovVin" },
          { name: "NroComMovVin" },
        ]
      },
      {
        name: "xDeposito_wMoVD",
        fields: [
          { name: "CodDeposito" },
        ]
      },
      {
        name: "xFechaVino_wMoVD",
        fields: [
          { name: "Fecha" },
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xIdCompro",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xNroCuitFecha_wMoVD",
        fields: [
          { name: "NroCuit" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xNroRecono_wMoVD",
        fields: [
          { name: "NroRecono" },
          { name: "CodVarUva" },
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xTipVinoFecha_wMoVD",
        fields: [
          { name: "CodTipVino" },
          { name: "Fecha" },
        ]
      },
    ]
  });
};
