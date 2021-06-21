const { response, request }  =require('express');

const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre = 'No name', page = 1, limit } = req.query;
    
    res.json({
        msg: 'GET API - controlador',
        q,
        nombre,
        page,
        limit
    });
}

const usuariosPost = (req, res = response) => {
    
    const { nombre, edad } = req.body;
    
    res.json({
        msg: 'POST API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {
   
    const { id } = req.params;

    res.json({
        msg: 'PUT API - controlador',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - controlador'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'PATCH API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}