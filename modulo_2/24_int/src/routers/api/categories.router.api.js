import CustomRouter from '../CustomRouter.js';

import { categories } from '../../data/mongo/manager.mongo.js';

export default class CategoriesRouter extends CustomRouter {
  init() {
    this.create('/', ['ADMIN', 'PREM'], async (req, res, next) => {
      try {
        const newCategory = await categories.create(req.body);
        res.success201(newCategory);
      } catch (error) {
        next(error);
      }
    });

    this.read('/:id', ['PUBLIC'], async (req, res, next) => {
      try {
        const { id } = req.params;
        const category = await categories.readOne(id);

        res.success200(category);
      } catch (error) {
        next(error);
      }
    });

    this.update('/:id', ['ADMIN', 'PREM'], async (req, res, next) => {
      try {
        const { id } = req.params;
        const modifiedCategory = await categories.update(id, req.body);

        res.success200(modifiedCategory);
      } catch (error) {
        next(error);
      }
    });

    this.destroy('/:id', ['ADMIN', 'PREM'], async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletedCategory = await categories.destroy(id);

        res.success200(deletedCategory);
      } catch (error) {
        next(error);
      }
    });
  }
}
