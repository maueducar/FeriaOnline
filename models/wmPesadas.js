const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wmPesadas', {
    NroTicket: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    TipoPesada: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PatenteCamion: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    PatenteAcoplado: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Chofer: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCliPro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodOrigen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodDestino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProd: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodTran: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodFinca: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PrimeraManual: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    SegundaManual: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    Usuario: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Usuario2aPesada: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    KilosPriPesada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroBalanzaPriPesada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosSegPesada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroBalanzaSegPesada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoPesada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HoraPrimeraPes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaSegundaPes: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraSegundaPes: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Observaciones: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Observaciones2: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Entrado_Salido: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    BasPub_Producto: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Op_BasPublica: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    NroTicketHist: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NetoDeEnvases: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodVarUva: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TenorAzucarino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipComercializacion: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    NroCertificado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilEnvEntrados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilEnvSalidos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilEnvNetos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EstLiquidacion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    KgDescarte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorDescarte: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgLiquidar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnitLiquidar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TotLiquidar: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdComEnCompras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    EnvaEntrados: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCamion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    OrdenDeEntrega: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FCoRemito: {
      type: DataTypes.STRING(14),
      allowNull: false,
      defaultValue: ""
    },
    ViajeCantera: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValorViaje: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValorAluminio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ValorSilice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Asignado: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodTipVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorParaVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FactorParaMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KilosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosMosto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LitrosVino: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCompraReco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    TipoCompraReco: {
      type: DataTypes.STRING(7),
      allowNull: false,
      defaultValue: ""
    },
    ContPropileno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PesoOrigen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FechaLlegada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HoraLlegada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroTanque: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroINV: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NroTikAduana: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IdenDestAduanero: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    CodTraFleAd: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'wmPesadas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xClieProv_mPesa",
        fields: [
          { name: "CodCliPro" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xCodCamion_mPesa",
        fields: [
          { name: "CodCamion" },
        ]
      },
      {
        name: "xCodCliente_mPesa",
        fields: [
          { name: "CodCliente" },
        ]
      },
      {
        name: "xCodDestino_mPesa",
        fields: [
          { name: "CodDestino" },
        ]
      },
      {
        name: "xCodFinca_mPesa",
        fields: [
          { name: "CodFinca" },
        ]
      },
      {
        name: "xCodOrigen_mPesa",
        fields: [
          { name: "CodOrigen" },
        ]
      },
      {
        name: "xCodProd_mPesa",
        fields: [
          { name: "CodProd" },
        ]
      },
      {
        name: "xCodProve_mPesa",
        fields: [
          { name: "CodCliPro" },
        ]
      },
      {
        name: "xCodTran_mPesa",
        fields: [
          { name: "CodTran" },
        ]
      },
      {
        name: "xCodVino_mPesa",
        fields: [
          { name: "CodTipVino" },
        ]
      },
      {
        name: "xDestino_mPesa",
        fields: [
          { name: "CodDestino" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xEstado_mPesa",
        fields: [
          { name: "Estado" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xFecha_mPesa",
        fields: [
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xFinca_mPesa",
        fields: [
          { name: "CodFinca" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xIdLiqCompras_mPesa",
        fields: [
          { name: "IdComEnCompras" },
        ]
      },
      {
        name: "xNroCertifUva_mPesa",
        fields: [
          { name: "NroCertificado" },
        ]
      },
      {
        name: "xNroCompraReco_mPesa",
        fields: [
          { name: "TipoCompraReco" },
          { name: "NroCompraReco" },
        ]
      },
      {
        name: "xNroTanqueYTicket_mPesa",
        fields: [
          { name: "NroTanque" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xNroTicket_mPesa",
        unique: true,
        fields: [
          { name: "NroTicket" },
        ]
      },
      {
        name: "xOrdenEntrega_mPesa",
        fields: [
          { name: "OrdenDeEntrega" },
        ]
      },
      {
        name: "xOrigen_mPesa",
        fields: [
          { name: "CodOrigen" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xProductos_mPesa",
        fields: [
          { name: "CodProd" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xProdUvaFecha_mPesa",
        fields: [
          { name: "CodCliPro" },
          { name: "CodVarUva" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xProveeFincaEst_mPesa",
        fields: [
          { name: "CodCliPro" },
          { name: "CodFinca" },
          { name: "EstLiquidacion" },
        ]
      },
      {
        name: "xTipo_mPesa",
        fields: [
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xTipo_Patente_mPesa",
        fields: [
          { name: "TipoPesada" },
          { name: "PatenteCamion" },
        ]
      },
      {
        name: "xTransportista_mPesa",
        fields: [
          { name: "CodTran" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xUsuario_mPesa",
        fields: [
          { name: "Usuario" },
          { name: "Fecha" },
          { name: "TipoPesada" },
          { name: "NroTicket" },
        ]
      },
      {
        name: "xVariDeUva_mPesa",
        fields: [
          { name: "CodVarUva" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xViajeCantera_mPesa",
        fields: [
          { name: "ViajeCantera" },
          { name: "Fecha" },
        ]
      },
    ]
  });
};
