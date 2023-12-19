const fs = require("node:fs");

class UsersManager {
  static path = "./data/users.json";
  //#region Attributes
  id;
  name;
  photo;
  email;
  //#endregion

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
      const users = this.readFile();

      const id = users[users.length - 1]?.id + 1 || 1;

      users.push({
        id,
        ...data,
      });

      try {
        fs.writeFileSync(UsersManager.path, JSON.stringify(users, null, 2));

        return users[users.length - 1];
      } catch (e) {
        return e.message;
      }
    }
  }

  readFile() {
    try {
      const users = JSON.parse(
        fs.readFileSync(UsersManager.path, {
          encoding: "utf-8",
        })
      );

      return users;
    } catch (e) {
      return [];
    }
  }

  readOne(id) {
    const users = this.readFile();

    return users.find((el) => el.id == id) ?? [];
  }
}

(() => {
  const UserManager = new UsersManager();

  const newUser = UserManager.create({
    name: "tomas",
    photo: "https://i.pravatar.cc/300",
    email: "amariar@gmail.com",
  });

  console.log(newUser);

  const allUsers = UserManager.readFile();
  console.log(allUsers);

  const oneUser = UserManager.readOne(1);
  console.log(oneUser);
})();
