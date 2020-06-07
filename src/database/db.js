// Importar a dependência do SQLite3
const sqlite3 = require("sqlite3").verbose()
// Criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// Utilizar o objeto de banco de dados para nossas operações
db.serialize( () =>{
    ///Com comandos SQL
    // 1 -Criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             adress TEXT,
//             adress2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
    
//     //2 - Inserir dados na tabela
//      const query = `
//      INSERT INTO places (
//          image,
//          name,
//          adress,
//          adress2,
//          state,
//          city,
//          items
//      ) VALUES (?,?,?,?,?,?,?);  
//     `   
    
//    const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     "Papersider",
//     "Guilherme Gemballa, Jardim América",
//     "N° 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Resíduos Eletrônicos, Lâmpadas"
// ]        
//     function afterInsertData(err){ 
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso!")
//         console.log(this)

//     }

//     db.run(query, values, afterInsertData) 

//     //3 -Consultar os dados na tabela
//     db.all(`SELECT * FROM places`,  function(err, rows){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros")
//         console.log(rows)
//     })


//     //Deletar dados na tabela 
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//     //     if (err) {
//     //         console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso!")
//     // })

    
})
//Exportar
module.exports = db