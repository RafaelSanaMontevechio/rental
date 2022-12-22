import { Specification } from '../../model/Specification';

export interface CreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create({ name, description }: CreateSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
  list(): Specification[];
}
