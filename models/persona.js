module.exports = function (sequelize, Sequelize) {
    var rol = require('../models/rol');
    var Rol = new rol(sequelize, Sequelize);
    var Persona = sequelize.define('Persona', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING(50)
        },
        apellido: {
            type: Sequelize.STRING(50)
        },
        cedula: {
            type: Sequelize.STRING(50),
            unique: true,
            allowNull: false
        },
        estado: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {freezeTableName: true, 
        createAt: 'fecha_registro',
        updateAt: 'fecha_modificacion'
    });
    Persona.belongsTo(Rol, {
        foreingKey: 'id_rol',
        constraints: false
    })
    return Persona;
};