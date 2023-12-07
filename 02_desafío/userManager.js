class userManager {
  static #users = [];

  id;
  name;
  photo;
  email;

  create(data) {
    const propsList = ["name", "photo", "email"];
    const keyList = Object.keys(data);

    const missingProps = [];

    for (let i = 0; i < propsList.length; i++) {
      !propsList.includes(keyList[i]) ? missingProps.push(propsList[i]) : null;
    }

    if (missingProps.length) {
      console.log(`Propiedades faltantes: ${missingProps.join(" ")}`);
    } else {
      const id = userManager.#users[userManager.#users.length - 1]?.id + 1 || 1;

      userManager.#users.push({ id, ...data });
    }
  }

  read() {
    return userManager.#users;
  }

  readOne(id) {
    return userManager.#users.find((el) => el.id == id);
  }
}

const UserManager = new userManager();

UserManager.create({
  name: "Tomás",
  photo: "https://i.pravatar.cc/300",
  email: "tomasTest123@gmail.com",
});

UserManager.create({
  name: "Matías",
  photo: "https://i.pravatar.cc/300",
  email: "matiasTest1@gmail.com",
});

console.log(UserManager.read());
console.log(UserManager.readOne(2));

UserManager.create({
  name: "Matías",
  photo: "https://i.pravatar.cc/300",
});
