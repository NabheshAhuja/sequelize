module.exports = (sequelize,Datatypes)=>{
    const Users = sequelize.define("users",{
        name:Datatypes.STRING,
        email:{
            type:Datatypes.STRING,
            defaultValue:'test@gmail.com'
        },
        gender:{
            type:Datatypes.STRING
        }
    })
}