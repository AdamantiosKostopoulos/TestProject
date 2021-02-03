import { coffeeBeans } from './coffeeBeans.model';

export class coffeeBatch{

  batchName: string;
  batchRoastDate: Date;
  batchRoaster: string;
  batchBeans: coffeeBeans;

  constructor(
    batchName: string,
    batchRoastDate: Date,
    batchRoaster: string,
    batchBeans: coffeeBeans)
  {
    this.batchName=batchName;
    this.batchRoastDate=batchRoastDate;
    this.batchRoaster=batchRoaster;
    this.batchBeans=batchBeans;
  }
}
