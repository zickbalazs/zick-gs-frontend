import {CarDTO} from './car-dto';

export interface ClassesDto {
  Abbreviation: string,
  Name?: string,
  Color?: string,
  Cars: CarDTO[]
}
