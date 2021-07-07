const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hcRelojes', {
    IdReloj: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    IP_Reloj: {
      type: DataTypes.STRING(41),
      allowNull: false,
      defaultValue: ""
    },
    Descripcion: {
      type: DataTypes.STRING(101),
      allowNull: false,
      defaultValue: ""
    },
    Hilo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    GPS: {
      type: DataTypes.STRING(61),
      allowNull: false,
      defaultValue: ""
    },
    Grupo: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    CommKey: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Port: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'hcRelojes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "xIdReloj_hRelo",
        unique: true,
        fields: [
          { name: "IdReloj" },
        ]
      },
    ]
  });
};
