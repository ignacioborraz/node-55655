// import ProductManager from "./ProductManager";
// import UserManager from "./UserManager";

// const productManager = new ProductManager(); 
// productManager.create({ title: 'Product 1', photo: 'path/to/image1.jpg', price: 20, stock: 100 });
// productManager.create({ title: 'Product 2', photo: 'path/to/image2.jpg', price: 30, stock: 50 });


// const userManager = new UserManager();
// userManager.create({ name: 'User 1', photo: 'path/to/user_image1.jpg', email: 'user1@example.com' });
// userManager.create({ name: 'User 2', photo: 'path/to/user_image2.jpg', email: 'user2@example.com' });


// console.log(productManager.read());
// console.log(userManager.read());


// import ProductManager from "./ProductManager.js";
// import UserManager from "./UserManager.js";


const ProductManager = require("./ProductManager.js");
const UserManager = require("./UserManager.js");

const productManager = new ProductManager(); 
productManager.create({ title: 'Product 1', photo: 'path/to/image1.jpg', price: 20, stock: 100 });
productManager.create({ title: 'Product 2', photo: 'path/to/image2.jpg', price: 30, stock: 50 });

const userManager = new UserManager();
userManager.create({ name: 'User 1', photo: 'path/to/user_image1.jpg', email: 'user1@example.com' });
userManager.create({ name: 'User 2', photo: 'path/to/user_image2.jpg', email: 'user2@example.com' });

console.log(productManager.read());
console.log(userManager.read());
