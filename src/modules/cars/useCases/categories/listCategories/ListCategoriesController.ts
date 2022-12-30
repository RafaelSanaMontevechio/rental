import { Request, Response } from 'express';

import { ListCategoryUseCase } from './ListCategoriesUseCase';

export class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  async handle(_req: Request, res: Response): Promise<Response> {
    const categories = await this.listCategoryUseCase.execute();

    return res.json({
      categories,
    });
  }
}
