const express = require("express")
//Objeto de servidor (server)
const server = express()

//Habilitar o uso do body na aplicação 
server.use(express.urlencoded({extended: true}))  



//Pegar o banco de dados
const db = require("./database/db.js")

//Configurar pasta publica
server.use(express.static("public"))

//Utilizando Template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//Configurar caminhos da minha aplicação
// Página inicial
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
     return res.render("index.html")
})

server.get("/create-point", (req,res) => {

    //req.query: Query Strings da url
    //console.log(req.query)
    return res.render("create-point.html")
})

server.post("/savepoint", (req,res) =>{

    //req.body: O corpo do formulário
    // console.log(req.body)
    //Inserir dados no banco de dados

    const query = `
      INSERT INTO places (
          image,
          name,
          adress,
          adress2,
          state,
          city,
          items
      ) VALUES (?,?,?,?,?,?,?);  
     `   
    
   const values = [
    req.body.image,
    req.body.name,
    req.body.adress,
    req.body.adress2,
    req.body.state,
    req.body.city,
    req.body.items
]       

function afterInsertData(err){ 
            if(err){
                console.log(err)
                return res.send("Erro no Cadastro!")
            }
            console.log("Cadastrado com sucesso!")
            console.log(this)

            return res.render("create-point.html", {saved: true} )
    
        }
    
        db.run(query, values, afterInsertData) 
   
} )


server.get("/search", (req, res) =>{

    const search = req.query.search
    if (search == "") {
        //Pesquisa Vazia
        return res.render("search-results.html", {total: 0})
    }


    //Pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,  function(err, rows){
        if(err){
            return console.log(err)
        }
        const total = rows.length

        // mostrar a página HTML com os dados do banco de dados 
        return res.render("search-results.html", {places: rows, total: total})

    })
   
})



//ligar o servidor
server.listen(3000) //porta 3000    

