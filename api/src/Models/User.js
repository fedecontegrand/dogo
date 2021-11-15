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
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
          // password: {
          //   type: DataTypes.STRING,
          //   allowNull: false,
          // },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        adress:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue:"Unknown"
        },
        // blocked: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        city: {
            type: DataTypes.TEXT
        },
        province: {
            type: DataTypes.TEXT
        }
    })
}