const db = require('./db')
//definir novo modulo

const Post= db.sequelize.define('postagens',{
 titulo: {
     type: db.Sequelize.STRING
 },
 conteudo:{
     type: db.Sequelize.TEXT
 }

})
module.exports = Post;

//Post.sync({force: true})//executar apenas umas vez 

