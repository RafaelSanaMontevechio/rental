import { CategoriesRepository } from '../../../repositories/categories/CategoriesRepository';
import { ListCategoryController } from './ListCategoriesController';
import { ListCategoryUseCase } from './ListCategoriesUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoriesController };
