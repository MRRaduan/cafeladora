import { TStrength } from "./RecipeMotor";

export const ratios = {
  pullOver: {
    mild: [18, 3.3],
    normal: [16, 3.3],
    strong: [12, 3.3],
  },
  press: {
    mild: [18, 4],
    normal: [15, 4],
    strong: [12, 4],
  },
  aero: {
    mild: [18, 2.3],
    normal: [15, 3],
    strong: [1, 3.3],
  },
  moka: {
    mild: [17, 3],
    normal: [1, 3],
    strong: [7, 3],
  },
};

export const pullOverStrength: TStrength = {
  mild: [18, 4],
  normal: [16, 3.3],
  strong: [12, 3.3],
};

export const pressStrength: TStrength = {
  mild: [18, 4],
  normal: [15, 4],
  strong: [12, 4],
};

export const aeroStrength: TStrength = {
  mild: [18, 2.3],
  normal: [15, 3],
  strong: [1, 3.3],
};

export const mokaStrength: TStrength = {
  mild: [17, 3],
  normal: [1, 3],
  strong: [7, 3],
};
