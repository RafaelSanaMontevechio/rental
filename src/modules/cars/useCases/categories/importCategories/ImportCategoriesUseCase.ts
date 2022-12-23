import { CategoriesRepository } from './../../../repositories/categories/CategoriesRepository';
import fs from 'fs';

import { parse } from 'csv-parse';

interface ImportCategory {
  name: string;
  description: string;
}

export class ImportCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: ImportCategory[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
      ``;
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    try {
      const categories = await this.loadCategories(file);

      categories.forEach(async (cat) => {
        const existingCategory = this.categoriesRepository.findByName(cat.name);

        if (!existingCategory) {
          this.categoriesRepository.create({
            name: cat.name,
            description: cat.description,
          });
        }
      });
    } catch (error) {
      throw new Error('Error loading categories');
    }
  }
}
