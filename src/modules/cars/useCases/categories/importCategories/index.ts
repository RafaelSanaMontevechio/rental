import { CategoriesRepository } from './../../../repositories/categories/CategoriesRepository';
import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';
import { ImportCategoriesController } from './ImportCategoriesController';

export default (): ImportCategoriesController => {
  const categoriesRepository = new CategoriesRepository();
  const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository,
  );
  const importCategoriesController = new ImportCategoriesController(
    importCategoriesUseCase,
  );

  return importCategoriesController;
};
