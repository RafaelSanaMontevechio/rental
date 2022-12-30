import { CategoriesRepository } from '../../../repositories/categories/CategoriesRepository';
import { ListCategoryController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoriesUseCase';

export default (): ListCategoryController => {
  const categoriesRepository = new CategoriesRepository();
  const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoryController(
    listCategoriesUseCase,
  );

  return listCategoriesController;
};
