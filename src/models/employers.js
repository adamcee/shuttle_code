'use strict';
module.exports = (sequelize, DataTypes) => {
  var employers = sequelize.define('employers', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return employers;
};