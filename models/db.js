const Sequelize = require('sequelize');

// ****CONEXAO COM O BANCO DE DADOS****
const sequelize = new Sequelize('postadd', 'root', '*****', {
    host: 'localhost',
    dialect: 'mysql'

})

sequelize.authenticate().then(function () {//se der certo entao mostra a mensagem
    console.log('Conectado com sucesso')

}).catch(function (erro) {//se nao mostra o erro
    console.log('Falha ao se conectar' + erro);
})

//exportar o Sequelize e o sequelize

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}