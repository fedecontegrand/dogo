const {DataTypes}=require("sequelize")

module.exports=sequelize=>{
    sequelize.define("pet",{
        species:{
            type:DataTypes.ENUM('Perro','Gato'),
        }, 
        sex:{
            type:DataTypes.ENUM('Macho','Hembra')
        },
        age:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        race:{
            type:DataTypes.STRING,
        }
    })
}