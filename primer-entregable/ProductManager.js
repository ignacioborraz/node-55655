class ProductManager {
    static productos = [];

    constructor (){
        this.productos = ProductManager.productos;
    }

    create(data) {
        if (data.title && data.photo && data.price && data.stock) {
            const nuevoId = this.productos.length + 1;
            const nuevoProducto = {
                id: nuevoId,
                title: data.title,
                photo: data.photo,
                price: data.price,
                stock: data.stock
            };
            this.productos.push(nuevoProducto);
            return nuevoId;
        } else {
            return null;
        }
    }

    read (){
        return this.productos;
    }

    readOne(id) {
        return this.productos.find(producto => producto.id === id) || null;
    }
}

module.exports = ProductManager;
