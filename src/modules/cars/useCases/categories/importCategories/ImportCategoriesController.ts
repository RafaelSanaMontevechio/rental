import { Request, Response } from 'express';

import { ImportCategoriesUseCase } from './ImportCategoriesUseCase';

export class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    if (!file) {
      return res.status(400).json({ message: 'File not provided' });
    }

    this.importCategoriesUseCase.execute(file);

    return res.json({ message: 'Success' });
  }
}
