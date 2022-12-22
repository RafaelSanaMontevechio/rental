import { ISpecificationsRepository } from './../../../repositories/specifications/ISpecificationsRepository';
import { Specification } from '../../../model/Specification';

export class ListSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}
