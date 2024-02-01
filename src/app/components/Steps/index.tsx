"use client";
import { useState } from "react";
import Initial from "../Initial";
import Method from "./Method";
import Intensity from "./Intensity";
import { useSearchParams } from "next/navigation";
import Recipe from "./Recipe";

type TSteps = "INITIAL" | "METHOD" | "INTENSITY" | "RECIPE";

const Steps = () => {
  const searchParams = useSearchParams();
  const ml = searchParams.get("ml");
  const unit = searchParams.get("unit");

  const [currentStep, setCurrentStep] = useState<TSteps>("METHOD");
  const [recipeData, setRecipeData] = useState({ unit, ml });

  const handleNextStep = (stepData: any, nextStepName: TSteps) => {
    setRecipeData({ ...recipeData, ...stepData });
    setCurrentStep(nextStepName);
  };

  const handlePreviousStep = (nextStepName: TSteps) => {
    setCurrentStep(nextStepName);
  };

  return (
    <>
      {currentStep === "METHOD" && (
        <Method nextStep={handleNextStep} previousStep={handlePreviousStep} />
      )}
      {currentStep === "INTENSITY" && (
        <Intensity
          nextStep={handleNextStep}
          previousStep={handlePreviousStep}
        />
      )}
      {currentStep === "RECIPE" && (
        <Recipe recipeData={recipeData} hasLoading />
      )}
    </>
  );
};

export default Steps;
