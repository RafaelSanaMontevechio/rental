import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    try {
      await this.createCategoryUseCase.execute({
        name,
        description,
      });

      return res.status(201).json({
        message: 'Category created',
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Category already exists',
      });
    }
  }
}
