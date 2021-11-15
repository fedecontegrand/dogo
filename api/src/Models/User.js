const {DataTypes}=require("sequelize")

module.exports=sequelize=>{
    sequelize.define("user",{
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        usuario: {
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
        imagen: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        direccion:{
            type:DataTypes.STRING,
            allowNull:true,
            defaultValue:"Unknown"
        },
        // blocked: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        ciudad: {
            type: DataTypes.TEXT
        },
        provincia: {
            type: DataTypes.TEXT
        }
    })
}