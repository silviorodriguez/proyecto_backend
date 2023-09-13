import db from "../database/db.js";

class UsuarioDAO{
    
    async createUsuario(nombre,cualidades,edad,cobro){
        const [id] = await db('usuarios')
        .insert({
            nombre,
            cualidades,
            edad,
            cobro
        })
        .returning('id');

        return id
    }

    async getUsuarioById(id){
        const usuario = await db('usuarios')
        .select('*')
        .where({id})
        .first();

        return usuario
    }

    async updateUsuario(id, updates){
        await db('usuarios')
        .where({id})
        .update(updates);

        return true
    }

    async deleteUsuario(id){
        await db('usuarios')
        .where({id})
        .del();

        return true
    }
}

export default new UsuarioDAO();