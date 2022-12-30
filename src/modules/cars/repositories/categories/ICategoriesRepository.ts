import { Category } from '../../entities/Category';

export interface CreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({ name, description }: CreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}
