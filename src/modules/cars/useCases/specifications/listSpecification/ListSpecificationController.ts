import { Request, Response } from 'express';

import { ListSpecificationUseCase } from './ListSpecificationUseCase';

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(_req: Request, res: Response): Response {
    const specifications = this.listSpecificationUseCase.execute();

    return res.json({
      specifications,
    });
  }
}
