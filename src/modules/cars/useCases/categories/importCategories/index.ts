import { CategoriesRepository } from './../../../repositories/categories/CategoriesRepository';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';
import { ImportCategoriesController } from './ImportCategoriesController';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository,
);
const importCategoriesController = new ImportCategoriesController(
  importCategoriesUseCase,
);

export { importCategoriesController };
