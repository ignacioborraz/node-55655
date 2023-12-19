const fs = require("node:fs");

class ProductManager {
  static path = "./data/products.json";
  //#region Attributes
  id;
  title;
  photo;
  price;
  stock;
  //#endregion

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
      const products = this.readFile();

      const id = products[products.length - 1]?.id + 1 || 1;

      products.push({
        id,
        ...data,
      });

      try {
        fs.writeFileSync(
          ProductManager.path,
          JSON.stringify(products, null, 2)
        );

        return products[products.length - 1];
      } catch (e) {
        return e.message;
      }
    }
  }

  readFile() {
    try {
      const products = JSON.parse(
        fs.readFileSync(ProductManager.path, {
          encoding: "utf-8",
        })
      );

      return products;
    } catch (e) {
      return [];
    }
  }

  readOne(id) {
    const products = this.readFile();
    return products.find((el) => el.id == id) ?? [];
  }
}

(async () => {
  const ProdManager = new ProductManager();

  const newProd = ProdManager.create({
    title: "el mundo de tomas 1 ",
    photo: "https://i.pravatar.cc/300",
    price: 200,
    stock: 100,
  });
  console.log(newProd);

  const allProducts = ProdManager.readFile();
  console.log(allProducts);

  const oneProduct = ProdManager.readOne(1);
  console.log(oneProduct);
})();
