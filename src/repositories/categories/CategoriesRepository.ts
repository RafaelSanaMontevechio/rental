import { Category } from '../../model/Category';

interface CreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepositories {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: CreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((cat) => cat.name === name);

    return category;
  }
}
