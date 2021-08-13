const Cliente = require('../models/Cliente');


function create(req, res){
    var cliente = new Cliente();
    var params = req.body;

    cliente.nombre = params.nombre;
    cliente.apellido = params.apellido;
    cliente.correo = params.correo;
    cliente.telefono = params.telefono;
    cliente.servicio = params.servicio;

    cliente.save( (error, clienteCreated) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        } else{
            if(!clienteCreated){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataCliente: clienteCreated
                })
            }
        }
    })
}

function update(req, res){
    var parameters =req.body;
    var idCliente = req.params.idCliente;

    Cliente.findByIdAndUpdate( idCliente, parameters, (error, clienteUpdated) => {
        if(error){
        res.status(500).send({
            statusCode: 500,
            message: "Error en el servidor"
        })
        }else{
            if(!clienteUpdated){
                res.status(400). send({
                    statusCode: 400,
                    message: "Error al actualizar el usuario"
                    }
                )
            }else{
                res.status(200).send({
                    statusCode: 200,
                    message: "Usuario actualizado correctamente"
                })
            }
        }
    })

}

function remove(req, res) {
    var idCliente = req.params.idCliente;

    Cliente.findByIdAndDelete( idCliente, (error, clienteRemoved) => {
        if(error){
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            if(!clienteRemoved){
                res.status(400).send({
                    statusCode: 400,
                    message: "Error al eliminar el usuario"
        })
    }else{
        res.status(200).send({
            statusCode: 200,
            message: "El usuario se eliminó correctamente"
        })

    }
}
    })
}

function getAllClientes(req, res){
    var servicio = req.params.servicio;
    Cliente.find( { servicio: servicio}, (error, allClientes) =>{
        if (error) {
            res.status(500).send({
                statusCode: 500,
                message: "Error en el servidor"
            })
        }else{
            res.status(200).send({
                statusCode: 200,
                message: "Todos los clientes",
                allClientes: allClientes
            })
        }
    } )
}


module.exports = {
    create,
    update,
    remove,
    getAllClientes
}