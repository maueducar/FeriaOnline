const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcPunVen', {
    CodPunVen: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    CodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Descripcion: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    TipoRegistradora: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    PunVenRemoto: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    CenStoDefault: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    RtoAs_CodTalona: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    RtoAs_CodDefCom: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    TcreCodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    DtoCodCtaCaja: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LPreCodSucurs: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    LisPreDefault: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpuCredObli: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      defaultValue: ""
    },
    ImpoRetiroCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    ImpoMaxEnCaja: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'vcPunVen',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_vPuVe",
        unique: true,
        fields: [
          { name: "CodPunVen" },
        ]
      },
      {
        name: "xCodSucurs_vPuVe",
        fields: [
          { name: "CodSucurs" },
        ]
      },
      {
        name: "xDescripcion_vPuVe",
        fields: [
          { name: "Descripcion" },
        ]
      },
      {
        name: "xSucursal_vPuVe",
        unique: true,
        fields: [
          { name: "CodSucurs" },
          { name: "CodPunVen" },
        ]
      },
    ]
  });
};
