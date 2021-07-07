const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mmResDet', {
    NroDeCierre: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroResumen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodClienteComercio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
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
    Id_Registro: {
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
    FecCompro: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CodConFac: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesAbierta: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Unidades: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniSalidas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    UniEntradas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PorBonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Bonificacion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    BonifFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    IVA_RNI: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpInterno: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreFinalUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GuiFru_Tipo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiFru_Numero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GuiFru_Rubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiFru_Variedad: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiFru_Envase: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiFru_Tamano: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    GuiFru_Marca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    ConcilA_Est: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ConcilA_Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilA_Conformado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilA_Pend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Est: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ConcilPor_Cantidad: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Conformado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ConcilPor_Pend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    FlagMark: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Buf_IdContraReg: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Buf_IdContraComp: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtPreNetoUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    MonExtSubFinal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCuenta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ClaveDeRefer: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CodCenCos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CanCuotas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpCuoMensual: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    AdiPriCuota: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DebeHaber: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    NroValor: {
      type: DataTypes.STRING(9),
      allowNull: false,
      defaultValue: ""
    },
    FechaVto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TipoRegistro: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: ""
    },
    PorcComisComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpComisComer: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mmResDet',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodConcepto_mReDe",
        fields: [
          { name: "CodConFac" },
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
        ]
      },
      {
        name: "xCodConFac_mReDe",
        fields: [
          { name: "CodConFac" },
        ]
      },
      {
        name: "xComprobante_mReDe",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xComprovIDReg_mReDe",
        fields: [
          { name: "CodComVta" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xIdComprob_mReDe",
        unique: true,
        fields: [
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xNroCierreResumen_mReDe",
        unique: true,
        fields: [
          { name: "NroDeCierre" },
          { name: "NroResumen" },
          { name: "IdCompro" },
          { name: "Id_Registro" },
        ]
      },
      {
        name: "xNroResumen_mReDe",
        unique: true,
        fields: [
          { name: "NroResumen" },
          { name: "TipoRegistro" },
          { name: "Id_Registro" },
          { name: "IdCompro" },
        ]
      },
    ]
  });
};
