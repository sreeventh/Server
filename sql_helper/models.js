const { Sequelize } = require("sequelize");


const { DataTypes } = Sequelize;
const sequelize = new Sequelize('seq_tut', 'root', 'root', {
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false
    }
});


const User = sequelize.define('user', {
    uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate:{
        //     len: [3,10]
        // }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = {User};