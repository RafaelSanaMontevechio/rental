import { Router } from 'express';

import { CategoriesRepositories } from '../repositories/categories/CategoriesRepository';

const categoriesRoutes = Router();

const categoryRepository = new CategoriesRepositories();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = categoryRepository.findByName(name);

  if (categoryAlreadyExists) {
    return res.status(400).json({
      message: 'Category already exists',
    });
  }

  categoryRepository.create({ name, description });

  return res.status(201).json({
    message: 'Category created',
  });
});

categoriesRoutes.get('/', (_req, res) => {
  const categories = categoryRepository.list();

  return res.json({
    categories,
  });
});

export { categoriesRoutes };
