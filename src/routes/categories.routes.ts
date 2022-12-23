import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/categories/createCategory';
import { importCategoriesController } from '../modules/cars/useCases/categories/importCategories';
import { listCategoriesController } from '../modules/cars/useCases/categories/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoriesController.handle(req, res);
});

export { categoriesRoutes };
