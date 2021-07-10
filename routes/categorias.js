const { Router } = require('express');
const { check } = require('express-validator');
const {
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria, 
    actualizarCategoria, 
    borrarCategoria } = require('../controllers/categorias');

const { tieneRole, validarCampos, validarJWT } = require('../middlewares');

const { existeCategoriaPorId } = require('../helpers/db-validators');

const router = Router();

//Obtener todas las categorias - publico
router.get('/', obtenerCategorias );

//Obtener una categoria por id  - publico
router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos
], obtenerCategoria );

//Crear una nueva categoria - cualquier persona con token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria );

//Actualizar - cualquier con token valido - privado
router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], actualizarCategoria );

//Borrar una categoria - Admin
router.delete('/:id', [   
    validarJWT,
    tieneRole('ADMIN_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeCategoriaPorId ),
    validarCampos
], borrarCategoria);

module.exports = router;