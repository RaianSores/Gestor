const database = require('../database/connection')

class TaskController {

    listaClientes(req, res){
        database.select().table('clientes').then(cadClientes =>{
            console.log(cadClientes)
            res.json(cadClientes)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new TaskController();