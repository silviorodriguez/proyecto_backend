import usuarioDao from "../dao/usuario.dao.js"

class UsuarioService{
    async createUsuario(usuarioDto){
        const {nombre,cualidades,edad,cobro} = usuarioDto
            return usuarioDao.createUsuario(nombre,cualidades,edad,cobro)
    }
    
    async getUsuarioById(id){
        return usuarioDao.getUsuarioById(id)
    }

    async updateUsuario(id, updates){
            return usuarioDao.updateUsuario(id, updates)
    }

    async deleteUsuario(id){
            return usuarioDao.deleteUsuario(id)
    }
}

export default new UsuarioService();