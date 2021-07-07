const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rtExistencias', {
    Rubro: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Variedad: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Envase: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    Marca: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
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
    Camara: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ""
    },
    DescTam1: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia1: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam2: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia2: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam3: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia3: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam4: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia4: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam5: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia5: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam6: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia6: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam7: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia7: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam8: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia8: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam9: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia9: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam10: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    Existencia10: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    DescTam11: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ""
    },
    Existencia11: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'rtExistencias',
    schema: 'dbo',
    timestamps: false
  });
};
