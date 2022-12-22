import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/specifications/SpecificationsRepository';
import { createSpecificationController } from '../modules/cars/useCases/specifications/createSpecification';
import { listSpecificationController } from '../modules/cars/useCases/specifications/listSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (req, res) => {
  return createSpecificationController.handle(req, res);
});

specificationRoutes.get('/', (req, res) => {
  return listSpecificationController.handle(req, res);
});

export { specificationRoutes };
