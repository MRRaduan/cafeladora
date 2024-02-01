import React, { useState } from "react";
import BottomMenu from "../BottomMenu";

type TIntensityProps = {
  nextStep: Function;
  previousStep: Function;
};

const Intensity = ({ nextStep, previousStep }: TIntensityProps) => {
  const [intensity, setIntensity] = useState(50);

  const handleOnChangeIntensity = (e: any) => {
    setIntensity(e.target.value);
  };

  const handleNextStep = () => {
    let intensityName = "";

    if (intensity >= 0 && intensity < 26) {
      intensityName = "mild";
    } else if (intensity >= 26 && intensity < 76) {
      intensityName = "normal";
    } else {
      intensityName = "strong";
    }

    nextStep({ intensity: intensityName }, "RECIPE");
  };

  return (
    <>
      <section className="h-full items-center w-full min-h-screen md:min-h-full">
        <div className="steps w-full pt-2 border border-t-2 border-normal-300 pb-2">
          <ul className="steps w-full md:w-6/12 mx-auto">
            <li className="step step-primary text-sm" data-content="✓">
              Medidas
            </li>
            <li className="step step-primary text-sm" data-content="✓">
              Método
            </li>
            <li className="step step-primary text-sm" data-content="●">
              Intensidade
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold color-blue text-center pt-4">
          Escolha a intensidade
        </h1>
        <span className="text-center mx-auto block">arraste para mudar</span>
        <div className="h-4/6 flex justify-center flex-col">
          <div className="container px-4 mx-auto md:w-6/12 ">
            <input
              type="range"
              min="0"
              max="100"
              className="range range-lg"
              defaultValue={50}
              onChange={(e) => handleOnChangeIntensity(e)}
            />
            <div className="w-full flex justify-between text-xs px-2 text-center">
              <span>
                | <br />
                Suave
              </span>

              <span>
                | <br />
                Intenso
              </span>
            </div>
          </div>
          <div className="flex align-center justify-center w-full mt-4">
            <div className="text-6xl">
              {intensity >= 0 && intensity < 26 && (
                <div className="text-center flex flex-col items-center">
                  <span className="d-block">🤙</span>
                  <span className="d-block text-base mt-2 font-bold">
                    suave
                  </span>
                </div>
              )}
              {intensity >= 26 && intensity < 76 && (
                <div className="text-center flex flex-col items-center">
                  <span className="d-block">🤌</span>
                  <span className="d-block text-base mt-2 font-bold">
                    equilibrado
                  </span>
                </div>
              )}
              {intensity >= 76 && intensity <= 100 && (
                <div className="text-center flex flex-col items-center">
                  <span className="d-block">🤘</span>
                  <span className="d-block text-base mt-2 font-bold">
                    intenso
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <BottomMenu
        nextStep={() => handleNextStep()}
        previousStep={() => previousStep("METHOD")}
        nextButtonText="CALCULAR"
      />
    </>
  );
};

export default Intensity;
