const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('apicrud','root','',{
    host:'localhost',
    dialect: 'mysql',
    pool:{max:5,min:0,idle:10000}
}) 

sequelize.authenticate().then(()=>{
    console.log("Connection established successfully")
}).catch(err=>{
    console.log(("Error"+err));
});

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users')(sequelize,DataTypes)
db.sequelize.sync()
.then(()=>{
    console.log("db is synced");
})