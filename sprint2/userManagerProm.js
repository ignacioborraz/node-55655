const fs = require("node:fs/promises");

class UserManager {
  static path = "./data/users.json";
  //#region Attributes
  id;
  name;
  photo;
  email;
  //#endregion

  async create(data) {
    const propsList = ["name", "photo", "email"];
    const keyList = Object.keys(data);

    const missingProps = [];

    for (let i = 0; i < propsList.length; i++) {
      !propsList.includes(keyList[i]) ? missingProps.push(propsList[i]) : null;
    }

    if (missingProps.length) {
      console.log(`Propiedades faltantes: ${missingProps.join(" ")}`);
    } else {
      const users = await this.readFile();

      const id = users[users.length - 1]?.id + 1 || 1;

      users.push({
        id,
        ...data,
      });

      try {
        await fs.writeFile(UserManager.path, JSON.stringify(users, null, 2));

        return users[users.length - 1];
      } catch (e) {
        return e.message;
      }
    }
  }

  async readFile() {
    try {
      const users = JSON.parse(
        await fs.readFile(UserManager.path, {
          encoding: "utf-8",
        })
      );

      return users;
    } catch (e) {
      return [];
    }
  }

  async readOne(id) {
    const users = await this.readFile();
    return users.find((el) => el.id == id) ?? [];
  }
}

(async () => {
  const UsersManager = new UserManager();

  const newUser = await UsersManager.create({
    name: "tomas",
    photo: "https://i.pravatar.cc/300",
    email: "amariar@gmail.com",
  });

  await UsersManager.create({
    name: "matias",
    photo: "https://i.pravatar.cc/300",
    email: "amariar@gmail.com",
  });

  console.log(newUser);

  const allUsers = await UsersManager.readFile();
  console.log(allUsers);

  const oneUser = await UsersManager.readOne(1);
  console.log(oneUser);
})();
