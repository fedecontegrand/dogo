const {DataTypes}=require("sequelize")

module.exports=sequelize=>{
    sequelize.define("lostPet",{
        missedAt:{
            type:DataTypes.TIME,
            allowNull:false
        },
        viewedAt:{
            type:DataTypes.ARRAY(DataTypes.JSON),
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.CHAR(1000),
            allowNull:false
        }
    })
}