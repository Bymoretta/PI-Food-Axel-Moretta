const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', 
  {
    id: {   
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true, 
      allowNull: false,      // Identificador
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,       // Nombre
      unique: true,
    },

    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,    // pasos del plato
    },

    score: {
      type: DataTypes.FLOAT
    },
    
    healthScore: { 
      type: DataTypes.INTEGER,
      allowNull: false,   // 0-10
    },

    image: {
    type: DataTypes.STRING
    },

    api:{
    type: DataTypes.STRING,
    defaultValue: "noAPI"
  }

  });
};