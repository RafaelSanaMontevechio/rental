import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoriesUseCase';

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(_req: Request, res: Response): Response {
    const categories = this.listCategoryUseCase.execute();

    return res.json({
      categories,
    });
  }
}
