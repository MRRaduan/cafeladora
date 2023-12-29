import { useState, useEffect } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import RecipeMotor from "./RecipeMotor";

const Loading = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 flex items-center justify-center flex-col h-4/6">
      {/* <Player
            autoplay
            loop
            src="coffee-loader.json"
            style={{ height: "300px", width: "300px" }}
          /> */}
      <div>
        <video width="320" height="240" autoPlay>
          <source src="nazare-tedesco.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="pt-4 text-2xl font-bold color-blue text-center ">
        Fazendo as contas..
      </h1>
    </div>
  );
};

type TRecipeProps = {
  recipeData: any;
};

const Recipe = ({ recipeData }: TRecipeProps) => {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 3000);
  }, []);

  const { method, intensity, ml } = recipeData;

  const recipeValues = new RecipeMotor(method, intensity, +ml);

  return (
    <>
      <section className="h-full items-center w-full min-h-screen md:min-h-full">
        {showLoading ? (
          <Loading />
        ) : (
          <>
            <div className="container mx-auto px-4 pt-8 pb-16">
              <h1 className="text-lg md:text-2xl font-bold text-center">
                Para{" "}
                <span className="text-primary">
                  {recipeData.unit === "xicara"
                    ? recipeData.ml / 50
                    : recipeData.ml}{" "}
                  {recipeData.unit}{" "}
                </span>{" "}
                de café <br />
                <span className="font-light mt-0 pt-0">
                  você vai precisar de..
                </span>
              </h1>
              <div className="mt-8 flex flex-col items-center">
                <div className="indicator">
                  <div className="indicator-item indicator-bottom">
                    <button className="btn btn-sm btn-secondary shadow-lg text-white">
                      compartilhar
                    </button>
                  </div>
                  <div className="stats stats-vertical md:stats-horizontal shadow-lg border border-base-200 mx-auto">
                    <div className="stat">
                      <div className="stat-figure text-primary">
                        <svg
                          width="26"
                          height="32"
                          viewBox="0 0 26 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.004 5.68192C17.2229 3.6247 15.2185 1.77193 13.0278 0.157776C12.8811 0.0550829 12.7063 0 12.5273 0C12.3482 0 12.1735 0.0550829 12.0268 0.157776C9.83607 1.77193 7.83166 3.6247 6.0505 5.68192C2.10412 10.2203 0.0181885 14.9953 0.0181885 19.4909C0.0181885 22.8085 1.33611 25.9903 3.68201 28.3362C6.02792 30.6821 9.20965 32 12.5273 32C15.8449 32 19.0266 30.6821 21.3725 28.3362C23.7184 25.9903 25.0363 22.8085 25.0363 19.4909C25.0363 14.9953 22.9504 10.2203 19.004 5.68192ZM12.5273 30.2545C9.67357 30.2513 6.93767 29.1163 4.9198 27.0984C2.90193 25.0805 1.76687 22.3446 1.76364 19.4909C1.76364 10.8183 10.3424 3.64705 12.5273 1.96189C14.7123 3.64719 23.2909 10.8183 23.2909 19.4909C23.2877 22.3446 22.1526 25.0805 20.1347 27.0984C18.1169 29.1163 15.381 30.2513 12.5273 30.2545ZM20.3818 19.4909C20.3795 21.5734 19.5512 23.5698 18.0787 25.0423C16.6062 26.5148 14.6097 27.3431 12.5273 27.3455C12.2958 27.3455 12.0738 27.2535 11.9102 27.0898C11.7465 26.9262 11.6545 26.7042 11.6545 26.4727C11.6545 26.2413 11.7465 26.0193 11.9102 25.8556C12.0738 25.692 12.2958 25.6 12.5273 25.6C14.1469 25.5982 15.6997 24.9539 16.845 23.8087C17.9903 22.6634 18.6345 21.1106 18.6363 19.4909C18.6363 19.2595 18.7283 19.0375 18.892 18.8738C19.0556 18.7101 19.2776 18.6182 19.5091 18.6182C19.7405 18.6182 19.9625 18.7101 20.1262 18.8738C20.2899 19.0375 20.3818 19.2595 20.3818 19.4909Z"
                            fill="#E63A46"
                          />
                        </svg>
                      </div>
                      <div className="stat-title">Água</div>
                      <div className="stat-value">
                        {recipeValues.getWaterToBrew().toFixed()}ml
                      </div>
                      <div className="stat-desc">fervendo</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-primary">
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.7777 5.70876C13.7253 0.656286 6.70385 -0.513952 3.09495 3.09495M3.09495 3.09495C-0.513952 6.70385 0.656286 13.7253 5.70876 18.7777M3.09495 3.09495C3.53059 5.27311 5.83998 10.021 11.5903 11.5893"
                            stroke="#E63A46"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.0421 30.8469C15.7511 34.556 22.9677 33.3532 28.1605 28.1605C33.3532 22.9676 34.5561 15.7511 30.8469 12.042M12.0421 30.8469C8.33292 27.1377 9.53566 19.9212 14.7284 14.7283C19.9213 9.53561 27.1378 8.33288 30.8469 12.042M12.0421 30.8469C14.7284 29.9514 19.8141 29.2163 22.1166 20.7733C23.7284 14.8633 28.6082 12.4897 30.8469 12.042"
                            stroke="#E63A46"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="stat-title">Café</div>
                      <div className="stat-value">
                        {recipeValues.getCoffeeBeans().toFixed(1)}g
                      </div>
                      <div className="stat-desc">moagem média</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 32C7.17395 32 0 24.826 0 16C0 7.17395 7.17395 0 16 0C24.826 0 32 7.17395 32 16C32 24.826 24.826 32 16 32ZM16 2.23256C8.4093 2.23256 2.23256 8.4093 2.23256 16C2.23256 23.5907 8.4093 29.7674 16 29.7674C23.5907 29.7674 29.7674 23.5907 29.7674 16C29.7674 8.4093 23.5907 2.23256 16 2.23256Z"
                            fill="#E63A46"
                          />
                          <path
                            d="M21.5214 21.8493C21.3279 21.8493 21.1344 21.8047 20.9558 21.6856L16.3418 18.9321C15.1958 18.2474 14.3474 16.7442 14.3474 15.4195V9.31723C14.3474 8.70699 14.8535 8.20095 15.4637 8.20095C16.0739 8.20095 16.58 8.70699 16.58 9.31723V15.4195C16.58 15.9554 17.0265 16.7442 17.4879 17.0121L22.1018 19.7656C22.6376 20.0781 22.8014 20.7628 22.4888 21.2986C22.2656 21.6558 21.8935 21.8493 21.5214 21.8493Z"
                            fill="#E63A46"
                          />
                        </svg>
                      </div>
                      <div className="stat-title">Tempo</div>
                      <div className="stat-value">
                        {recipeValues.getTotalTimeForBrewing()}min
                      </div>
                      <div className="stat-desc">
                        cuidado para não extrapolar
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:w-6/12">
                  <h2 className="font-bold text-2xl pb-4">
                    Recomendações de preparo
                  </h2>
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-200 "
                  >
                    <div className="collapse-title font-medium">
                      1. Escaldar o papel do filtro com água quente antes de
                      iniciar a extração
                    </div>
                    <div className="collapse-content text-sm">
                      <p>
                        Importante etapa pare retirar o gosto de papel que pode
                        ficar no café
                      </p>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-200   mt-4"
                  >
                    <div className="collapse-title font-medium">
                      2. Despejar um pouco de água até começar a gotejar,
                      esperar de 30 a 45 segundos para depois continuar os
                      demais despejos de água
                    </div>
                    <div className="collapse-content text-sm">
                      <p>
                        A pré-infusão serve para &quot;ativar&quot; o café,
                        fazendo com que os sabores sejam liberados com mais
                        facilidade durante a extração (a infusão)
                      </p>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-200  mt-4"
                  >
                    <div className="collapse-title font-medium">
                      3. Controlar os despejos de água dentro do tempo
                      estipulado da receita
                    </div>
                    <div className="collapse-content text-sm">
                      <p>
                        É importante ter esse controle para que o seu café não
                        fique muito extraído, apresentando maior amargor. O
                        tempo definido na receita foi calculado de acordo com as
                        preferências selecionadads no caféladora
                      </p>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-200  mt-4"
                  >
                    <div className="collapse-title font-medium">
                      4. Após a pré-infusão, fazer o preparo até 3 despejos de
                      água
                    </div>
                    <div className="collapse-content text-sm">
                      <p>
                        Cada despejo, também chamado de ataques, são importantes
                        para que a extração seja equilibrada. O ideal é fazer
                        cada ataque em uma constância adequada de tempo e fluxo.
                        Despejar toda a água num único ataque pode fazer com que
                        o café fique sub extraído.
                      </p>
                    </div>
                  </div>

                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-200  mt-4"
                  >
                    <div className="collapse-title font-medium">
                      5. Faça o último despejo de água mirando no pó que fica
                      nas extremidades do filtro
                    </div>
                    <div className="collapse-content text-sm">
                      <p>
                        Para ter maior preoveito sobre a quantidade de pó de
                        café que foi utilizada, é importante fazer total uso
                        dele. Essa etapa evita disperdícios e também aproveita
                        total daquilo que o café tem a oferecer.
                      </p>
                    </div>
                  </div>
                  <div className="flex mt-8">
                    <Link href="/">
                      <button className="btn btn-lg btn-primary text-white">
                        calcular nova receita
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Recipe;
