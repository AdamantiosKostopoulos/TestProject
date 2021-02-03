import { Time } from '@angular/common';
import { coffeeBatch } from './coffeeBatch.model';

export class Brew{

  brewName: string;
  brewHour: Time;
  brewDate: Date;
  brewGramsIn: number;
  brewGramsOut: number;
  brewTemp: number;
  brewSeconds: number;
  brewCoffeeBatch: coffeeBatch;

  constructor(
    brewName:string,
    brewHour: Time,
    brewDate: Date,
    brewGramsIn: number,
    brewGramsOut: number,
    brewTemp: number,
    brewSeconds: number,
    brewCoffeeBatch: coffeeBatch)
    {
      this.brewName=brewName;
      this.brewHour=brewHour;
      this.brewDate=brewDate;
      this.brewGramsIn=brewGramsIn;
      this.brewGramsOut=brewGramsOut;
      this.brewTemp=brewTemp;
      this.brewSeconds=brewSeconds;
      this.brewCoffeeBatch=brewCoffeeBatch;
  }
}
