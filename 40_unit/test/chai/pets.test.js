import { expect } from "chai";
import "dotenv/config.js";
import dao from "../../src/dao/factory.js";
const { Pet } = dao;

describe("Testeando Modelo Mascotas", () => {
  const model = new Pet();
  const data = { name: "igna", specie: "dog" };
  let id;
  it("La creación de una mascota requiere un objeto con la propiedad 'name'", () => {
    expect(data).to.have.property("name");
  });
  it("La creación de una mascota no necesita un objeto con la propiedad 'image'", () => {
    expect(data).not.to.have.property("image");
  });
  it("La función creadora de una mascota, devuelve un objeto con la propiedad '_id'", async () => {
    const one = await model.create(data);
    //expect(one).to.be.a("object")
    expect(one).to.be.an("object");
  });
  it("La función creadora de una mascota, devuelve un objeto con la propiedad '_id'", async () => {
    const one = await model.create(data);
    id = one._id;
    expect(one).to.have.property("_id");
  });
  it("La función para leer mascotas debe devolver un objeto con las propiedades 'prev', 'next' y 'pets'", async () => {
    const all = await model.getAll({
      page: 2,
      skip: 2,
      limit: 2,
      adopted: true,
    });
    expect(all).to.have.property("prev");
    //.and.to.have.property("next")
    //.and.to.have.property("pets");
    expect(all).to.have.property("next");
    expect(all).to.have.property("pets");
  });
  it("La función para leer mascotas debe devolver un array de mascotas en la propiedad 'pets'", async () => {
    const all = await model.getAll({
      page: 2,
      skip: 2,
      limit: 2,
      adopted: true,
    });
    expect(Array.isArray(all.pets)).to.be.equals(true);
  });
  it("La función para actualizar una mascota debe devolver una mascota actualizada", async () => {
    const before = await model.getBy(id);
    const one = await model.update(id, { name: "ignacio" });
    expect(one.name).not.to.be.equals(before.name);
  });
  it("La función para eliminar una mascota debe efectivamente eliminar una mascota", async () => {
    await model.delete(id);
    const after = await model.getBy(id);
    expect(after).to.be.equals(null);
  });
});
