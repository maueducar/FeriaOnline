const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('zmMovCaR', {
    CodComSto: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    LetCompro: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    PunVenCom: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    NumCompro: {
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
    VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    NumRomaneo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CantCabFaena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgPrefaena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgMermaCabe: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    JuegoAchura: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CantCuero: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgCueros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgHuesos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    KgGrasa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodMata: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodClasif: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    DesdeNroPieza: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroTropa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_EntSal: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    Res_CantPiernas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_CantEspaldas: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_CantMedias: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_KilosTot: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_IdCompro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Res_VisCompro: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    Res_NroSalCamara: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCenSto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_KiloCompra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_KilosCompra: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_Flete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Flete: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_Faena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Faena: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_SENASA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_SENASA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_Cueros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Cueros: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_Grasa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Grasa: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_Huesos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Huesos: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    PreUnit_JueAchura: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_Achuras: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_CostoBruto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_CostoNeto: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Porcen_ComisiFeria: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    SubTot_ComisiFeria: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'zmMovCaR',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCentStock_zMoCa",
        fields: [
          { name: "CodCenSto" },
          { name: "Fecha" },
          { name: "Res_EntSal" },
          { name: "VisCompro" },
        ]
      },
      {
        name: "xComCompra_zMoCa",
        unique: true,
        fields: [
          { name: "CodComSto" },
          { name: "LetCompro" },
          { name: "PunVenCom" },
          { name: "NumCompro" },
          { name: "IdCompro" },
        ]
      },
      {
        name: "xFecha_zMoCa",
        fields: [
          { name: "Fecha", order: "DESC" },
        ]
      },
      {
        name: "xMatadero_zMoCa",
        fields: [
          { name: "CodMata" },
          { name: "Fecha" },
        ]
      },
      {
        name: "xNroRomaneo_zMoCa",
        fields: [
          { name: "NumRomaneo" },
        ]
      },
      {
        name: "xNroTropa_zMoCa",
        fields: [
          { name: "NroTropa" },
        ]
      },
      {
        name: "xRes_IdCompro_zMoCa",
        fields: [
          { name: "Res_IdCompro" },
        ]
      },
      {
        name: "xUltTropPiez_zMoCa",
        fields: [
          { name: "NroTropa", order: "DESC" },
          { name: "DesdeNroPieza", order: "DESC" },
        ]
      },
    ]
  });
};
