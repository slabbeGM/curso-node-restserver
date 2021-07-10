const { Role, Usuario, Categoria, Producto } = require('../models');


const esRolValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol ${ rol } no existe`);
    }
}

const emailExiste = async(correo = '') => {    
    const existeEmail = await Usuario.findOne({ correo});

    if ( existeEmail ){
        throw new Error(`El usuario con correo ${ correo } ya existe`);
    }
}

const existeUsuarioPorId = async(id) => {    
    const existeUsuario = await Usuario.findById(id);

    if ( !existeUsuario ){
        throw new Error(`El ID: ${ id } no existe`);
    }
}

const existeCategoriaPorId = async(id) => {
    const existeCategoria = await Categoria.findById(id);

    if( !existeCategoria ){
        throw new Error(`Categoría con ID ${ id } no existe`);
    }
}

const existeProductoPorId = async(id) => {
    const existeProducto = await Producto.findById(id);

    if( !existeProducto ){
        throw new Error(`Categoría con ID ${ id } no existe`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId
}