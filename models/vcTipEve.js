const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vcTipEve', {
    CodEven: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    DescEven: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    ConSeguimiento: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    },
    Grupo: {
      type: DataTypes.STRING(13),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'vcTipEve',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodEven_vTiEv",
        unique: true,
        fields: [
          { name: "CodEven" },
        ]
      },
      {
        name: "xDescEven_vTiEv",
        fields: [
          { name: "DescEven" },
        ]
      },
    ]
  });
};
