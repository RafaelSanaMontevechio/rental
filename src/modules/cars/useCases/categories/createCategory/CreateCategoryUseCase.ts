import { ICategoriesRepository } from '../../../repositories/categories/ICategoriesRepository';

interface CreateCategoryRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: CreateCategoryRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    await this.categoriesRepository.create({ name, description });
  }
}
