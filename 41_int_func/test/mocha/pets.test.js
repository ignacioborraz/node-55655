import assert from "assert";
import "dotenv/config.js";
import dao from "../../src/dao/factory.js";
const { Pet } = dao;

describe("Testeando Modelo Mascotas", () => {
  const model = new Pet();
  const data = { name: "igna", specie: "dog" };
  let id;
  it("La creación de una mascota requiere un objeto con la propiedad 'name'", () => {
    assert.ok(data.name);
  });
  it("La creación de una mascota no necesita un objeto con la propiedad 'image'", () => {
    assert.strictEqual(data.image, undefined);
  });
  it("La función creadora de una mascota, devuelve un objeto", async () => {
    const one = await model.create(data);
    assert.strictEqual(typeof one, "object");
  });
  it("La función creadora de una mascota, devuelve un objeto con la propiedad '_id'", async () => {
    const one = await model.create(data);
    id = one._id;
    assert.ok(one._id);
  });
  it("La función para leer mascotas debe devolver un objeto con las propiedades 'prev', 'next' y 'pets'", async () => {
    const all = await model.getAll({
      page: 2,
      skip: 2,
      limit: 2,
      adopted: true,
    });
    //console.log(all);
    assert.ok(all.prev);
    assert.ok(all.next);
    assert.ok(all.pets);
    //NO SE RECOMIENDA TENER MAS DE UN ASSERT POR CADA UNIDAD DE TESTING "IT"
  });
  it("La función para leer mascotas debe devolver un array de mascotas en la propiedad 'pets'", async () => {
    const all = await model.getAll({
      page: 2,
      skip: 2,
      limit: 2,
      adopted: true,
    });
    assert.strictEqual(Array.isArray(all.pets), true);
  });
  it("La función para actualizar una mascota debe devolver una mascota actualizada", async () => {
    const before = await model.getBy(id);
    //before va a ser el objeto ANTES de la modificaicon
    const one = await model.update(id, { name: "ignacio" });
    //one va a ser el objeto LUEGO de la modificacion
    assert.strictEqual(before.name !== one.name, true);
  });
  it("La función para eliminar una mascota debe efectivamente eliminar una mascota", async () => {
    await model.delete(id);
    //one va a ser el objeto ANTES de la eliminación
    const after = await model.getBy(id);
    //console.log(after);
    //after va a ser el objeto LUEGO de la elimininación
    assert.strictEqual(after, null);
  });
});
