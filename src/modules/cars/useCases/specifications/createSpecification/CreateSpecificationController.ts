import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      this.createSpecificationUseCase.execute({
        name,
        description,
      });
    } catch (error) {
      return res.status(400).json({
        message: 'Specification already exists',
      });
    }

    return res.status(201).json({
      message: 'Specification created',
    });
  }
}
