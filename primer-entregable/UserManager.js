class UserManager {
    static usuarios=[];

    constructor() {
        this.usuarios = UserManager.usuarios;
    }
  
    create(data) {
        if (data.name && data.photo && data.email) {
            const nuevoId = this.usuarios.length + 1; // Generar un nuevo ID autoincremental
            const nuevoUsuario = {
                id: nuevoId,
                name: data.name,
                photo: data.photo,
                email: data.email
            };
            this.usuarios.push(nuevoUsuario);
            return nuevoId;
        } else {
            return null;
        }
    }
  
    read() {
        return this.usuarios;
    }
  
    readOne(id) {
        return this.usuarios.find(usuario => usuario.id === id) || null;
    }
}

module.exports = UserManager;
