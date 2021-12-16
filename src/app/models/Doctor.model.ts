import { DrCity } from './DrCity.model';
import { DrCategory } from './DrCategory.model';
import { DrArea } from './DrArea.model';
export interface Doctor{
  id?:string,
  firstName:string,
  lastName:string,
  mobile:number,
  drCategory:DrCategory[],
  drCity:DrCity[],
  drArea:DrArea[],
  fees?:number,
  url?:string,
  time?:number,
  addr?:string
}
