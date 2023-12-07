class ProductManager {
  static #products = [];

  id;
  title;
  photo;
  price;
  stock;

  create(data) {
    const propsList = ["title", "photo", "price", "stock"];
    const keyList = Object.keys(data);

    const missingProps = [];

    for (let i = 0; i < propsList.length; i++) {
      !propsList.includes(keyList[i]) ? missingProps.push(propsList[i]) : null;
    }

    if (missingProps.length) {
      console.log(`Propiedades faltantes: ${missingProps.join(" ")}`);
    } else {
      const id =
        ProductManager.#products[ProductManager.#products.length - 1]?.id + 1 ||
        1;

      ProductManager.#products.push({ id, ...data });
    }
  }

  read() {
    return ProductManager.#products;
  }

  readOne(id) {
    return ProductManager.#products.find((el) => el.id == id);
  }
}

const ProdManager = new ProductManager();

ProdManager.create({
  title: "el mundo de tomas 1 ",
  photo: "https://i.pravatar.cc/300",
  price: 200,
  stock: 100,
});

console.log(ProdManager.readOne(1));

ProdManager.create({
  title: "el mundo de tomas 2",
  photo: "https://i.pravatar.cc/300",
  price: 200,
});

console.log(ProdManager.read());
