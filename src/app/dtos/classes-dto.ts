import {CarDTO} from './car-dto';

export interface ClassesDto {
  abbreviation: string,
  name?: string,
  color?: string,
  cars: CarDTO[]
}
