const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cmConciD', {
    CodCom1Conciliador: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCom1Conciliador: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVen1Conciliador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCom1Conciliador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisCompro1Conciliador: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    Id_Reg1Conciliador: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    R1TipoDeVinculo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    R1CantConciliada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    R1CantConformada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CodCom2Conciliado: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    LetCom2Conciliado: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    PunVen2Conciliado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    NumCom2Conciliado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    VisCompro2Conciliado: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    IdCompro2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Id_Reg2Conciliado: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    R2TipoDeVinculo: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    R2CantConciliada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    R2CantConformada: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Metodo: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Nivel: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: ""
    },
    IdRegistro: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cmConciD',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCom1Conciliador",
        unique: true,
        fields: [
          { name: "CodCom1Conciliador" },
          { name: "LetCom1Conciliador" },
          { name: "PunVen1Conciliador" },
          { name: "NumCom1Conciliador" },
          { name: "IdCompro1" },
          { name: "Id_Reg1Conciliador" },
        ]
      },
      {
        name: "xCom2Conciliado",
        unique: true,
        fields: [
          { name: "CodCom2Conciliado" },
          { name: "LetCom2Conciliado" },
          { name: "PunVen2Conciliado" },
          { name: "NumCom2Conciliado" },
          { name: "IdCompro2" },
          { name: "Id_Reg2Conciliado" },
        ]
      },
      {
        name: "xIdRegistro_cConD",
        unique: true,
        fields: [
          { name: "IdCompro1" },
          { name: "Id_Reg1Conciliador" },
        ]
      },
    ]
  });
};
