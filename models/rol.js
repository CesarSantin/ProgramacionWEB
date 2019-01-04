module.exports = function (sequelize, Sequelize) {
    var Rol = sequelize.define('Rol', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING(20)
        }
    }, {freezeTableName: true, timestamps: false});
    Rol.associate = function (models) {
        models.rol.hasMany(models.persona, {
            foreingKey: 'id_rol'
        })
    }
    return Rol;
}