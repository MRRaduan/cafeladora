import { TMethods } from "../Method";
import { ratios } from "./strengths";

export type TStrength = {
  mild: Array<number>;
  normal: Array<number>;
  strong: Array<number>;
};

class RecipeMotor {
  method: TMethods;
  intensity: string;
  prefferedCoffeeBrewed: number;
  ratios: any;

  constructor(
    method: TMethods,
    intensity: string,
    prefferedCoffeeBrewed: number
  ) {
    this.method = method;
    this.intensity = intensity;
    this.prefferedCoffeeBrewed = prefferedCoffeeBrewed;
    this.ratios = ratios;
  }

  getSelectedRatioKeyValue(): Array<number> {
    const selectedRatio = this.ratios[this.method][this.intensity];
    return selectedRatio;
  }

  getCoffeeBeans(): number {
    const selectedRatio = this.getSelectedRatioKeyValue();
    console.log("[selectedRatio]: ", selectedRatio);
    console.log("[this.prefferedCoffeeBrewed]: ", this.prefferedCoffeeBrewed);
    const coffeeBeans = this.prefferedCoffeeBrewed / selectedRatio[0];
    return coffeeBeans;
  }

  getWaterToBrew(): number {
    // The common ratio that coffee beans have on water is 1:2
    const coffeeBeans = this.getCoffeeBeans();
    const totalLiquid = this.prefferedCoffeeBrewed + coffeeBeans * 2;
    return totalLiquid;
  }

  getTotalTimeForBrewing(): number {
    const selectedRatio = this.getSelectedRatioKeyValue();
    return selectedRatio[1];
  }
}

export default RecipeMotor;
