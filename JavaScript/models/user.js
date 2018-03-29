const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            required: true,
            unique: true,
            allowNull: false
        },
        passwordHash: {
            type: Sequelize.STRING,
            required: true
        },
        fullName: {
            type: Sequelize.STRING,
            required: true
        },
        salt: {
            type: Sequelize.STRING,
            required: true
        },
    }, {
            timestemps: false

        });

    User.associate = (models) => {
        User.hasMany(models.Article, {
            foreignKey: 'authorId',
            sourceKey: 'id'
        });
    };

    return User;
};