import usuarioServices from "../service/usuario.services.js";

class UsuarioController{

    async createUsuario(request, response){
        try {
            const id = await usuarioServices.createUsuario(request.body);
           return response.status(201).json(id);
        } catch (error) {
            console.error(error);
           return response.status(500).send('Error Interno del Servidor');
        }

    }

    async getUsuarioById(request, response){
        try {
            const  id = request.params.id;
            const usuario = await usuarioServices.getUsuarioById(id);

            if(!usuario){
                return response.status(404).send('Usuario no encontrado');
            } 

            return response.status(201).json(usuario)
        } catch (error){
            console.error(error);
           return response.status(500).send('Error Interno del Servidor');
        }
    }

    async updateUsuario(request, response){
        try {
            const id = request.params.id;
            const update = request.body;
            const success = await usuarioServices.updateUsuario(id,update)

            if(!success){
            return response.status(404).send('Usuario no encontrado');
            }
            response.status(201).send('Usuario Actualizado');
        } catch (error) {
            console.error(error);
            return response.status(500).send('Error Interno del Servidor');
        }
    }

    async deleteUsuario(request, response){
        try {
            const  id = request.params.id;

            console.log('si esta dando click')
            
            const success = await usuarioServices.deleteUsuario(id);

            if(!success){
            return response.status(404).send('Ususario no encontrado');
            }
            return response.send('Usuario Eliminado');
        } catch (error) {
            console.error(error);
           return response.status(500).send('Error Interno del Servidor');
        }
    }
}

export default new UsuarioController();
