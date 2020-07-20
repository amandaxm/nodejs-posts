const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')

// ****Template Engine*****************
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')

////////////////////////////////////////////

//CONFIGURANDO BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//******************************************** */

//ROTAS 
app.get('/',function(req,res){
    //Mostrar todos os posts
    Post.findAll({order: [['id','DESC']]}).then(function(posts){
        res.render('home', {posts: posts});
    })    
})

app.get('/cad', function (req, res) {
    res.render('form');
})

app.post('/add', function (req, res) {
    //criar novo post

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/');

    }).catch(function (err) {
        res.send('Erro ' + err);
    })


})


app.get('/deletar/:id', function(req,res){
    Post.destroy({where:{id: req.params.id}})
    .then(function(){
        res.send('Postagem deletada com sucesso!');
    }).catch(function(err){
        res.send('Essa postagem nao existe');
    })
})

//INICIANDO SERVIDOR


app.listen(8081, function () {//funcao callback disparada ao chamar listen()
    console.log("Servidor rodando na porta 8081");

});//deve ser a ultima do codigo 