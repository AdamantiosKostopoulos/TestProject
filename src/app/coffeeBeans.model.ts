export class coffeeBeans{

  beansName: string;
  beansCountry: string;
  beansVariety: string;
  beansProccess: string;
  beansAltitude: number;
  beansRecipe: string;
  beansTasteProfile: string;

  constructor(
    beansName: string,
    beansCountry: string,
    beansVariety: string,
    beansProccess: string,
    beansAltitude: number,
    beansRecipe: string,
    beansTasteProfile: string)
    {
      this.beansName=beansName;
      this.beansCountry=beansCountry;
      this.beansVariety=beansVariety;
      this.beansProccess=beansProccess;
      this.beansAltitude=beansAltitude;
      this.beansRecipe=beansRecipe;
      this.beansTasteProfile=beansTasteProfile;
  }
}
