const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vpPerVen', {
    NomProc: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    IdUsuario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DesdeFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HastaFecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DesdeCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaCliente: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescCliente1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescCliente2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    Destino: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    SoloFacturas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    SaltoEntreCtas: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    OpcionSaldos: {
      type: DataTypes.STRING(29),
      allowNull: false,
      defaultValue: ""
    },
    SetDeCtasExclu: {
      type: DataTypes.STRING(51),
      allowNull: false,
      defaultValue: ""
    },
    ProVtaPorClientes: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    ProVtaAnalitico: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    CodSucursDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSucursHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodPunVenHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NroLibroIVA: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LeyPeriodo: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    XLS_EvolDiaVenCobTot: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    Hoja_EvolDiaVenCobTot: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    XLS_EvolDiaCobXZonas: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    Hoja_EvolDiaCobXZonas: {
      type: DataTypes.STRING(26),
      allowNull: false,
      defaultValue: ""
    },
    XLS_MovMenProveed: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    XLS_EvolDiaVenCobPorZonas: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    XLS_MensualPorZonas: {
      type: DataTypes.STRING(251),
      allowNull: false,
      defaultValue: ""
    },
    CodArticuDesde: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodArticuHasta: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    CodRubroDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodRubroHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodSubRubHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DesdeVend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    HastaVend: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescVend1: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    DescVend2: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    AplyQueryWiz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvinDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodProvinHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodLocaliDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodLocaliHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodActiviDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodActiviHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGruDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodGruHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCategDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCategHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodAreaDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodAreaHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZonaDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodZonaHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanalDesde: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCanalHasta: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol1D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol2D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol3D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol4D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol5D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol6D: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol1H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol2H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol3H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol4H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol5H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DiaCol6H: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vpPerVen',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xNomProcUser_vpPeVe",
        unique: true,
        fields: [
          { name: "NomProc" },
          { name: "IdUsuario" },
        ]
      },
    ]
  });
};
