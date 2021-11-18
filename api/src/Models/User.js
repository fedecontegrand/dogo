const {DataTypes}=require("sequelize")

module.exports=sequelize=>{
    sequelize.define("user",{
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        street:{
            type:DataTypes.STRING,
            defaultValue:"Unknown"
        },
        // blocked: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        city: {
            type: DataTypes.TEXT,
            defaultValue:"Unknown"
        },
        state: {
            type: DataTypes.TEXT,
            defaultValue:"Unknown"
        }
    })
}