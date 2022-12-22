import { Category } from '../../model/Category';

export interface CreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}
