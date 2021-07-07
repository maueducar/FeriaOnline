const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pcTareas', {
    CodTarea: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    DesTarea: {
      type: DataTypes.STRING(31),
      allowNull: false,
      defaultValue: ""
    },
    CosUnitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    Unidades: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: ""
    },
    ReqNroOT: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'pcTareas',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "xCodigo_pTare",
        unique: true,
        fields: [
          { name: "CodTarea" },
        ]
      },
      {
        name: "xDescripcion_pTare",
        fields: [
          { name: "DesTarea" },
        ]
      },
    ]
  });
};
